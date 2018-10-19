(ns reagent-forms.core
  (:require [reagent-forms.multitable :refer [multi-table] :as mt]
            [reagent-forms.shared :as shared]))

(defn map-structure
  "Produce a map with the same key-structure from the vector"
  [v]
  (into {}
        (for [[k v] (partition 2 v) 
              :let [nv (cond
                         (vector? v) (map-structure v)
                         (map? v) (:value v "")
                         :default "")]]
          [k nv])))

(defn reset-default
  "Reset the given atom to a default state based on a default map, where it will possess each of the (possibly nested) structural elements of the given default, but values only according to an internal :default"
  ([default-schema-vec]
   (reset-default (atom {}) default-schema-vec))
  ([A default-schema-vec]
   (when (reset! A (map-structure default-schema-vec))
     A)))

(defn select-box [m]
  (let [{:keys [options id on-change]
         :or {id "generic-select"
              options ["No :options provided"]}} m]
    (into [:select.form-control {:id id
                                 :name id
                                 :on-change on-change}]
          (for [o options]
            [:option o]))))

(defn text-area [opt-map]
  (let [{:keys [id input-value placeholder disabled label valpath changefn value char-limit]} opt-map
        
        textarea 
        [:textarea.form-control {:id id 
                                 :name id 
                                 :rows 5
                                 :default-value input-value
                                 :value value
                                 :on-change changefn 
                                 :placeholder placeholder
                                 :disabled disabled}]]
    [:div.form-group
     textarea
     (when char-limit
       (let [char-count (count value)]
         [:div.char-limit (str char-count "/" char-limit " characters")]))]))

(defn tinput
  "Produce data-bound inputs for a given map, updating `ATOM` on change. `opt-map` specifies options including display variables."
  [ATOM valpath & [opt-map]]
  ;; (println "valpath is:")
  ;; (prn valpath)
  ;; (println "Value is:")
  ;; (prn (get-in @ATOM valpath))
  ;; (println "Atom is:")
  ;; (prn @ATOM)

  (let [{:keys [id validation-function required? type default-value disabled subtext invalid-feedback char-limit]
         :or {id (str valpath)
              type "text"}} opt-map
        input-value (get-in @ATOM valpath)
        change-atom (fn [s] (swap! ATOM assoc-in valpath s))
        changefn1 (fn [e] (change-atom (shared/get-value-from-change e)))
        changefn (cond
                   validation-function (comp validation-function changefn1)
                   char-limit (fn [e]
                                (let [v (shared/get-value-from-change e)]
                                  (cond
                                    (= char-limit (dec (count v))) identity
                                    (< char-limit (count v)) (change-atom (apply str (take char-limit v)))
                                    :default (changefn1 e)))

                                )
                   :default changefn1)
        input-map (merge {:type type
                          :id id
                          :name id
                          :on-change changefn
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
                                     :on-change changefn
                                     :id id})
                :multi-table (multi-table ATOM opt-map)
                :textarea (text-area (assoc opt-map :value input-value :changefn changefn))
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
  (for [[k v] (partition 2 fm) :let [path (conj (vec pathv) k)]]
    (cond
      (sequential? v) (render-application v A path)
      (map? v) [tinput A path v]
      :default [:h3.error (str "Failed to render (type:" (type v) ") \n\n" fm)])))

(defn render-review
  "Parse the application map and render the review based on the ordered `schema` of the application, with values in `application` expected to be as given by `render-application`.
  
  Resulting form will be read-only with no changes possible."
  [schema application]
  (render-application
   (shared/reviewify schema)
   (atom application)))
