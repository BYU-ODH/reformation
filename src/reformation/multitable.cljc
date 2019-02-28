(ns reformation.multitable
  (:require [reformation.shared :as shared]))

(defn add-multi-table-row [multitable-map vpath row-template]
  (update-in multitable-map vpath
          (fn [x]
            (if (nil? x) [row-template]
                (conj x row-template)))))

(defn delete-multi-table-row [multitable-map vpath]
  (update-in multitable-map vpath (comp vec butlast)))

(defn update-multi-table [multi-table table-row-num column-key value]
  (assoc-in multi-table [table-row-num column-key] value))

(defn multi-table [{:keys [READ UPDATE] :as fn-map}
                   {:keys [label id subtext columns min-rows vpath sum-field disabled]
                    :or {id "generic-id"
                         subtext nil
                         vpath [(keyword id)]
                         min-rows 1}
                    :as m}]
  (let [row-template (into {} (for [c columns] [(c :key) nil]))
        sub (when subtext
              [:small.form-text.text-muted {:id (str "sub_" id)} subtext])
        ;; _init-table! (when (< (count (READ vpath)) min-rows)
        ;;                (UPDATE vpath add-multi-table-row row-template))
        headers [:thead (into [:tr] (for [c columns] [:th {:class (when (:disabled c) "disabled")}(:title c)]))]
        tbody-base (into [:tbody] (for [[i m] (map-indexed vector (READ vpath))]
                               (into [:tr]
                                     (for [c columns]
                                       (let [nameval (str (shared/idify (:title c)))
                                             nameval_num (str nameval "_" i)
                                             if-checkbox (fn [v &[e]] (if (= "checkbox" (:input-type c)) v e))
                                             multi-vpath (conj vpath i (:key c))
                                             on-change-function
                                             (fn [e]
                                               (UPDATE multi-vpath assoc-in
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
                                             :value (READ multi-vpath)}]
                                           (if-checkbox [:span.custom-control-indicator])]])))))
        tbody (if-not sum-field tbody-base
                      (do
                        (let [sum-key (-> sum-field name (str "-total") keyword)
                              sum-val (READ [sum-key])
                              total (apply + (for [c (READ vpath)]
                                               #?(:cljs (js/parseInt (sum-field c))
                                                  :clj (Integer/parseInt (sum-field c)))))]
                          (UPDATE [sum-key] assoc (max total 0))
                          (conj tbody-base
                                [:tr [:td.form-group.total {:col-span 2}
                                      [:label "Total"]
                                      [:div.input-group
                                       [:span.input-group-addon "$"]
                                       [:input
                                        {:type "text"
                                         :disabled true
                                         :value (READ [sum-key])}]]]]))))
        add-button [:a.btn.btn-success
                    {:on-click #(UPDATE vpath add-multi-table-row row-template)}
                    [:i.fa.fa-plus]]
        delete-button [:a.btn.btn-danger
                       {:on-click #(UPDATE vpath delete-multi-table-row)}
                       [:i.fa.fa-minus]]]
    [:div.multi-table.table-responsive
     (into [:table.table-bordered.table-striped
            headers
            tbody])
     (when-not disabled
       [:div.control-buttons add-button delete-button])]))
