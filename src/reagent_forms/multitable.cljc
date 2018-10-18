(ns reagent-forms.multitable
  (:require [reagent-forms.shared :as shared]))

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
                                               #?(:cljs (js/parseInt (sum-field c))
                                                  :clj (Integer/parseInt (sum-field c)))))]
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
