(ns reformation.multitable
  (:require [reformation.shared :as shared]))

(defn add-row [rows row-template]
  (if (nil? rows) [row-template]
      (conj rows row-template)))

(defn delete-row
  "Delete a row if you are above min-rows; uses pop, so last row if vec, else first row."
  [multitable-map min-rows]
  (cond-> multitable-map
    (> (count multitable-map) min-rows) pop))


(defn make-radio [c attr-map]
  (let [nom (gensym 'name)]
    (for [{:keys [value contents] :as o} (:options c)]
      (let [[v disp] [(or value contents o) (or contents value o)]
            new-attr-map (merge attr-map {:id v :type "radio" :name nom :value v})]
        [:div.form-group {:key v :style  {:text-align "right"}} 
         [:div {:style {:text-align "left"}}
          [:input.form-control new-attr-map]
          [:label {:for v} disp]]]))))

(defn make-column [i {:keys [title input-type input-class disabled
                             placeholder default-value column-class]
                      k :key
                      :as c}
                   {vpath :vpath table-disabled :disabled
                    {:keys [READ UPDATE]} :fn-map :as universals}]
  (let [is-checkbox? (= "checkbox" input-type)
        multi-vpath (conj vpath i (:key c))
        nameval (str (shared/idify title))
        on-change-fn-bind (fn [e] (UPDATE multi-vpath
                                          (if is-checkbox? (constantly (-> e .-target .-checked))
                                              (constantly (shared/get-value-from-change e)))))
        
        basic-attr-map {:type (or input-type "text")
                        :class [input-class
                                (if is-checkbox? "custom-control-input")
                                (when disabled "disabled")]
                        :disabled (or disabled table-disabled)
                        :placeholder placeholder
                        :name nameval
                        :on-change on-change-fn-bind
                        :value (let [v (READ multi-vpath)]
                                 (println (str "v is nil:" (= v nil)) )
                                 (or v default-value))}]

    [:td {:key (or k title) :class [column-class nameval (str nameval "_" i)]}
     (if is-checkbox? [:label.custom-control.custom-checkbox])
     (cond (= "textarea" input-type) [:textarea.textarea basic-attr-map]
           (= "radio" input-type) (make-radio c basic-attr-map)
           (not (#{"textarea" "radio"} input-type)) [:input basic-attr-map])
     (if is-checkbox? [:span.custom-control-indicator])]))

(defn make-add-button [UPDATE vpath row-template]
  [:a.btn.btn-success
   {:on-click #(UPDATE vpath add-row row-template)}
   [:i.fa.fa-plus]])

(defn make-delete-button [UPDATE vpath min-rows]
  [:a.btn.btn-danger
   {:on-click #(UPDATE vpath delete-row min-rows)}
   [:i.fa.fa-minus]])

(defn sum-field-component [sum-field {vpath :vpath
                                      {:keys [READ UPDATE]} :fn-map}]
  (let [sum-key (-> sum-field name (str "-total") keyword)       
        total (reduce + (for [c (READ vpath)]
                         (if-let [c (sum-field c)]
                           #?(:cljs (js/parseInt c) :clj (Integer/parseInt c))
                           0)))]
    (UPDATE [sum-key] (constantly total))
    [:tr [:td.form-group.total {:col-span 2}
          [:label "Total"]
          [:div.input-group
           [:span.input-group-addon "$"]
           [:input {:type "text"
                    :disabled true
                    :value (or (READ [sum-key]) "")}]]]]))

(defn multi-table [{:keys [READ UPDATE] :as fn-map}
                   {:keys [label id subtext columns min-rows vpath sum-field disabled style-classes]
                    :or {id "generic-id"
                         subtext nil
                         vpath [(keyword id)]
                         min-rows 1} :as m}]
  (let [row-template (zipmap (map :key columns) (repeat nil))
        sub (when subtext
              [:small.form-text.text-muted {:id (str "sub_" id)} subtext])
        _init-table! (when (< (count (READ vpath)) min-rows)
                       (UPDATE vpath add-row row-template))

        universals {:vpath vpath :fn-map fn-map :disabled disabled}
        headers [:thead [:tr
                         [:<> (for [{:keys [disabled title]} columns]
                                [:th {:class (str disabled) :key title}
                                 title])]]]
        tbody [:tbody
               [:<> (for [i (range (count (READ vpath)))]
                      [:tr {:key i}
                       [:<> (for [c columns]
                              (make-column i c universals))]])]
               (when sum-field [sum-field-component sum-field universals])]]
    
    [:div.multi-table
     [:table.table {:class style-classes}
      headers
      tbody]
     (when-not disabled
       [:div.control-buttons
        (make-add-button UPDATE vpath row-template)
        (make-delete-button UPDATE vpath min-rows)])]))
