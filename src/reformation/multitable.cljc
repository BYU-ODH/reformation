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
      (let [[v disp] (if (not (map? o))
                       [o o]
                       [(or value contents)
                        (or contents value)])
            idsym (str v)
            
            attr-adds {:id idsym :type "radio" :name nom :value v
                       :on-change (:on-change-fn c)}]
        [:div.form-group {:key (str idsym)  :style  {:text-align "right"}} 
         [:div {:style {:text-align "left"}} [:input.form-control
                                              (-> attr-map (merge attr-adds))
                                              #_(merge attr-map attr-adds)]
          [:label {:for idsym} disp]]]))))


(defn make-column [{:keys [title input-type input-class disabled placeholder default-value column-class title] :as c} i vpath {:keys [READ UPDATE]} table-disabled]
  (let [is-checkbox? (= "checkbox" input-type)
        multi-vpath (conj vpath i (:key c))
        on-change-fn-bind (fn [e] (UPDATE multi-vpath
                                          (if is-checkbox? (constantly (-> e .-target .-checked))
                                              (constantly (let [res (shared/get-value-from-change e)]
                                                            (println "get-val-from-change:" res)
                                                            (println "event:")
                                                            #?(:cljs (.log js/console e))
                                                            (println "event value:")
                                                            (println (-> e .-target .-value))
                                                            res)))))
        
        c (assoc c :on-change-fn on-change-fn-bind)
        nameval (str (shared/idify title))

        basic-attr-map {:type (or input-type "text")
                        :class [input-class
                                (if is-checkbox? "custom-control-input")
                                (when disabled "disabled")]
                        :disabled (or disabled table-disabled)
                        :placeholder placeholder
                        :name nameval
                        :value (let [v (READ multi-vpath)]
                                 (println (str "v is nil:" (= v nil)) )
                                 (or v default-value))}]

    [:td {:key title :class [nameval
                               (str nameval "_" i)
                               column-class]}
     [:label.custom-control.custom-checkbox
      (cond
        (= "textarea" input-type) [:textarea.textarea basic-attr-map ]
        (  =  "radio" input-type) (make-radio c basic-attr-map)
        (not (#{"textarea" "radio"} input-type)) [:input (merge basic-attr-map {:on-change on-change-fn-bind})])
      (if is-checkbox? [:span.custom-control-indicator])]]))



(defn multi-table [{:keys [READ UPDATE] :as fn-map}
                   {:keys [label id subtext columns min-rows vpath sum-field disabled]
                    :or {id "generic-id"
                         subtext nil
                         vpath [(keyword id)]
                         min-rows 1}
                    :as m}]
  (let [row-template (zipmap (map :key columns) (repeat nil))
        sub (when subtext
              [:small.form-text.text-muted {:id (str "sub_" id)} subtext])
        _init-table! (when (< (count (READ vpath)) min-rows)
                       (UPDATE vpath add-row row-template))
        headers [:thead [:tr
                         [:<>]
                         (for [c columns] [:th {:class (when (:disabled c) "disabled") :key (:title c)}(:title c)])]]
        add-button [:a.btn.btn-success
                    {:on-click #(UPDATE vpath add-row row-template)}
                    [:i.fa.fa-plus]]
        delete-button [:a.btn.btn-danger
                       {:on-click #(UPDATE vpath delete-row min-rows)}
                       [:i.fa.fa-minus]]


        tbody-base [:tbody
                    [:<>
                     (let [f (fn [i m]
                               [:tr {:key i}
                                [:<> (for [c columns]
                                       (make-column c i vpath fn-map disabled))]])]
                       (map-indexed f (READ vpath)))]]

        tbody (if-not sum-field tbody-base
                      (let [sum-key (-> sum-field name (str "-total") keyword)
                            sum-val (READ [sum-key])
                            total (apply + (for [c (READ vpath)]
                                             #?(:cljs (if-let [c (sum-field c)]
                                                        (js/parseInt c)
                                                        0)
                                                :clj (if-let [c (sum-field c)]
                                                       (Integer/parseInt c)
                                                       0))))]
                        (UPDATE [sum-key] (constantly total))
                        (conj tbody-base
                              [:tr [:td.form-group.total {:col-span 2}
                                    [:label "Total"]
                                    [:div.input-group
                                     [:span.input-group-addon "$"]
                                     [:input
                                      {:type "text"
                                       :disabled true
                                       :value (or sum-val "")}]]]])))]
    
    [:div.multi-table
      [:table.table.is-striped.is-fullwidth.is-hoverable
           headers
           tbody
           (when-not disabled
             [:div.control-buttons add-button delete-button])]]))
