(ns reagent-forms.core
  (:require [reagent-forms.multitable :as mt]
            [reagent-forms.shared :as shared]))

(defn map-structure
  "Produce a map with the same key-structure but with empty values"
  [m]
  (into (array-map)
        (for [[k v] m :let [endv (cond 
                                   (vector? v) (:value (apply hash-map v) "")
                                   (map? v) (map-structure v)
                                   :default "")]]
          [k (:value endv endv)])))

(defn reset-default
  "Reset the given atom to a default state based on a default map, where it will possess each of the (possibly nested) structural elements of the given default, but values only according to an internal :default"
  [A default-map]
  (when (reset! A (map-structure default-map))
    A))

(defn select-box [m]
  (let [{:keys [options id on-change]
         :or {id "generic-select"
              options ["No :options provided"]}} m]
    (into [:select.form-control {:id id
                                 :name id
                                 :on-change on-change}]
          (for [o options]
            [:option o]))))

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
                :multi-table (mt/multi-table ATOM opt-map)
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

(defn render-application
    "Render a browser form based on an input [sorted] map `fm`, with values to be stored/updated in atom `A`.
  Use an array-map or sorted-map as `fm` if you want to maintain order"
  [fm A & [pathv]]
  (for [[k v] fm :let [path (conj (vec pathv) k)]]
    (cond
      (vector? v) [tinput A path (apply hash-map v)] 
      (map? v) (render-application v A path) 
      :default [:h3.error (str "Failed to render (type:" (type v) ") " fm)])))

(defn render-review
  "Parse the application map and render the review based on the ordered `schema` of the application, with values in `application` expected to be as given by `render-application`.
  
  Resulting form will be read-only with no changes possible."
  [application schema]
  (application/render-application (shared/reviewify schema) (atom application)))
