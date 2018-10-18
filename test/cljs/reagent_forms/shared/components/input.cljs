(ns reagent-forms.shared.components.input
  (:require [reagent-forms.shared-test :as shared ]))

(defn reviewify
  "Adjust a submission-default map for review rather than editing, adding lots of "
  [given-default]
  (into (array-map)
        (for [[k v] given-default]
          [k 
           (cond 
             (vector? v) (conj v :disabled true)
             (map? v) (reviewify v))])))

(defn add-multi-table-row [multitable-map value-path row-template]
  (update-in multitable-map value-path
          (fn [x]
            (if (nil? x) [row-template]
                (conj x row-template)))))

(defn delete-multi-table-row [multitable-map value-path]
  (update-in multitable-map value-path (comp vec butlast)))

(defn update-multi-table [multi-table table-row-num column-key value]
  (assoc-in multi-table [table-row-num column-key] value))

(defn multi-table [ATOM m]
  (let [{:keys [label id subtext columns min-rows value-path sum-field disabled]
         :or {id "generic-id"
              subtext nil
              value-path [(keyword id)]
              min-rows 1}} m
        row-template(into {} (for [c columns] [(c :key) nil]))
        sub
        (when subtext
          [:small.form-text.text-muted {:id (str "sub_" id)} subtext])
        _init-table! (when (< (-> @ATOM (get-in value-path) count) min-rows)
                       (swap! ATOM add-multi-table-row value-path row-template))
        headers [:thead (into [:tr] (for [c columns] [:th {:class (when (:disabled c) "disabled")}(:title c)]))]
        tbody-base (into [:tbody] (for [[i m] (map-indexed vector (get-in @ATOM value-path))]
                               (into [:tr]
                                     (for [c columns]
                                       (let [nameval (str (shared/idify (:title c)))
                                             nameval_num (str nameval "_" i)
                                             if-checkbox (fn [v &[e]] (if (= "checkbox" (:input-type c)) v e))
                                             multi-value-path (conj value-path i (:key c))
                                             on-change-function
                                             (fn [e]
                                               (swap! ATOM assoc-in
                                                      multi-value-path
                                                      (if-checkbox (-> e .-target .-checked) (shared/get-value-from-change e))))]
                                         [:td {:class ["form-group" nameval nameval_num (:input-type c) (:column-class c)]}
                                          [:label.custom-control.custom-checkbox
                                           [(if (= "textarea" (:input-type c)) :textarea
                                                :input)
                                            {:type (or (:input-type c) "text")
                                             :class [(:input-class c)
                                                     (if-checkbox "custom-control-input")
                                                     (when (:disabled c) "disabled")]
                                             :disabled (or (:disabled c) disabled)
                                             :placeholder (c :placeholder)
                                             :default-value (c :default-value)
                                             :on-change on-change-function
                                             :name nameval
                                             :value (get-in @ATOM multi-value-path)}]
                                           (if-checkbox [:span.custom-control-indicator])]])))))
        tbody (if-not sum-field tbody-base
                      (do
                        (let [sum-key (-> sum-field name (str "-total") keyword)
                              sum-val (sum-key @ATOM)
                              total (apply + (for [c (get-in @ATOM value-path)]
                                               (js/parseInt (sum-field c))))]
                          (swap! ATOM assoc sum-key (max total 0))
                          (conj tbody-base
                                [:tr [:td.form-group.total {:col-span 2}
                                      [:label "Total"]
                                      [:div.input-group
                                       [:span.input-group-addon "$"]
                                       [:input
                                        {:type "text"
                                         :disabled true
                                         :value (sum-key @ATOM)}]]]]))))
        add-button [:a.btn.btn-success
                    {:on-click #(swap! ATOM add-multi-table-row
                                       value-path
                                       row-template)}
                    [:i.fa.fa-plus]]
        delete-button [:a.btn.btn-danger
                       {:on-click #(swap! ATOM delete-multi-table-row value-path)}
                       [:i.fa.fa-minus]]]
    [:div.multi-table.table-responsive
     (into [:table.table-bordered.table-striped
            headers
            tbody])
     (when-not disabled
       [:div.control-buttons add-button delete-button])]))


(defn date-prompt [m]
  (let [{:keys [label id]
         :or {subtext nil
              id (shared/idify label)}} m]
    [:div.form-group
     [:div.row
      [:div.col-md-3
       [:label {:for id} label]]
      [:div.col
       [:input {:type "date" :id id :name id :default-value (js/Date.)}]]]]))

(defn text-prompt [m]
  (let [{:keys [label id subtext value disabled]
         :or {subtext nil
              id (shared/idify label)}} m
        sub (if subtext
              [:small.form-text.text-muted {:id (str "sub_" id)} subtext]
              nil)
        mv (when (or value disabled)
             {:value value
              :disabled disabled})]
    [:div.form-group
     [:div.row
      (when label
        [:div.col-md-3
         [:label {:for id} label]])
      [:div.col
       [:input (merge mv {:type "text" :id id :name id :default-value "test"})]]]
     sub]))

(defn select-box [m]
  (let [{:keys [options id on-change]
         :or {id "generic-select"
              options ["No :options provided"]}} m]
    (into [:select.form-control {:id id
                                 :name id
                                 :on-change on-change}]
          (for [o options]
            [:option o]))))

(defn text-area [m]
  (let [{:keys [label id subtext]
         :or {subtext nil}} m
        sub (if subtext
              [:small.form-text.text-muted {:id (str "sub_" id)} subtext]
              nil)]
    [:div.form-group
     [:label {:for id} label]
     [:textarea.form-control {:id id :name id :rows 5}]]
    ))



(defn tinput
  "Produce data-bound inputs for a given map, updating `ATOM` on change. `opt-map` specifies options including display variables."
  [ATOM valpath & [opt-map]]
  (let [{:keys [id validation-function required? type default-value disabled subtext invalid-feedback]
         :or {id (str valpath)
              type "text"}} opt-map
        input-value (get-in @ATOM valpath)
        
        change-fun1 (fn [e]
                      (swap! ATOM
                             assoc-in valpath (shared/get-value-from-change e)))
        change-fun (if-let [vf validation-function]
                     (fn [e]
                       (vf e)
                       (change-fun1 e))
                     change-fun1)
        input-map (merge {:type type
                          :id id
                          :name id
                          :on-change change-fun
                          :default-value default-value}
                         {:value input-value}
                         (when disabled
                           {:disabled disabled})
                         (when required?
                           {:required true}))
        sub (when subtext
              [:small.form-text.text-muted subtext])
        invalid-feedback (when invalid-feedback
                           [:div.invalid-feedback invalid-feedback])
        input (condp = type
                :select (select-box {:options (:options opt-map)
                                     :on-change change-fun
                                     :id id})
                :multi-table (multi-table ATOM opt-map)
                :textarea [:textarea.form-control {:id id 
                                                   :name id 
                                                   :rows 5
                                                   :value input-value
                                                   :on-change change-fun 
                                                   :placeholder (:placeholder opt-map)
                                                   :disabled disabled}]

                ;; default
                [:input.form-control input-map])]
    [:div.form-group
     [:div.row
      [:div.col-md-3.label-area
       [:label {:for id} (:label opt-map id)]
       sub]
      [:div.col
       input
       invalid-feedback]]]))
