(ns reformation.core
  (:require [reformation.multitable :refer [multi-table] :as mt]
            [reformation.shared :as shared]
            #?(:cljs [reagent.core :refer [atom]])
            [clojure.string :as str]))
(declare tinput render-application render-review)

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

(defn render-label
  "Create a label to go into a .row"
  [{:keys [for-id label-text subtext]}]
  [:div.col-md-3.label-area
   [:label {:for for-id}
    label-text]
   subtext])

(defn select-box [m]
  (let [{:keys [options id on-change required?]
         :or {id "generic-select"
              options ["No :options provided"]}} m]
    (into [:select.form-control {:id id
                                 :name id
                                 :required required?
                                 :on-change on-change}]
          (for [o options]
            (if (map? o)
              [:option {:value (:value o)}
               (:content o)]
              [:option o])))))

(defn text-area [opt-map]
  (let [{:keys [id input-value placeholder disabled label valpath changefn value char-count required]} opt-map
        {:keys [limit enforce?]} char-count
        
        textarea 
        [:textarea.form-control {:id id 
                                 :name id 
                                 :rows 5
                                 :default-value input-value
                                 :value value
                                 :on-change changefn
                                 :required required
                                 :placeholder placeholder
                                 :disabled disabled}]]
    [:div.form-group
     textarea
     (when char-count
       (let [ccount (count value)
             class (if (< ccount limit)
                     "conforms"
                     "exceeded")]
         [:div.char-limit {:class class}
          (str ccount "/" limit " characters")]))]))

(defn validation-function?
  [f]
  (:validation-function? (meta f)))

(defn to-validation 
  "Given a predicate, wrap it properly to be a validation function for tinput.

  Validation function runs on the input at every change, altering the validity of the element as prescribed. It waits for .checkValidity on the input to explain the error"
  [f & [error-message]]
  (if (validation-function? f) f 
      (with-meta (fn [click]
                   (let [v (.. click -target -value)
                         dom-element (.. click -target)
                         error-message (or error-message "Invalid input")]
                     (if (f v)
                       (.setCustomValidity dom-element "")
                       (.setCustomValidity dom-element error-message)))) {:validation-function? true})))


(defn checkbox
  "Create a checkbox"
  [{:keys [valpath ATOM validation-function]}]
  (let [checked? (get-in @ATOM valpath)
        toggle-fn (comp (or validation-function identity)
                        #(swap! ATOM update-in valpath not))]
    [:input {:class (last valpath)
             :type "checkbox"
             :checked checked?
             :on-change toggle-fn}]))


(defn togglebox
  "Builds a group which, when toggled, displays its `:content`"
  [{:keys [label content valpath ATOM default-value]}]
  (let [content-id "togglebox-content"
        checked? (atom (boolean default-value))]
    (swap! ATOM assoc-in valpath @checked?)
    (fn []
      [:div.togglebox
       [tinput ATOM valpath {:type :checkbox
                             :validation-function #(swap! checked? not)
                             :label ""}]
       (when @checked? 
         [:div.toggle-content
          {:class (if @checked? "togglebox-show" "togglebox-hidden")}
          (render-application content ATOM)])])))


(defn tinput
  "Produce data-bound inputs for a given map, updating `ATOM` on change. `opt-map` specifies options including display variables."
  [ATOM valpath & [opt-map]]
  (let [{:keys [id validation-function required? type default-value disabled subtext invalid-feedback char-count hidden class contingent]
         :or {id (str/join " " (map name valpath))
              type "text"}} opt-map
        {:keys [limit enforce?]} char-count
        {:keys [field-key contingent-fn]} contingent
        input-value (get-in @ATOM valpath)
        change-atom (fn [s] (swap! ATOM assoc-in valpath s))
        changefn1 (fn [e] (change-atom (shared/get-value-from-change e)))
        validation-function (when-let [vf validation-function]
                              (to-validation vf invalid-feedback))
        changefn (cond
                   validation-function (fn [e] (doto e changefn1 validation-function))
                   enforce? (fn [e]
                              (let [v (shared/get-value-from-change e)]
                                (cond
                                  (= limit (dec (count v))) identity
                                  (< limit (count v)) (change-atom (apply str (take limit v)))
                                  :default (changefn1 e))))
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
                :select (select-box (merge (select-keys opt-map [:options :required?])
                                           {:on-change changefn
                                            :id id}))
                :multi-table (multi-table ATOM opt-map)
                :textarea (text-area (assoc input-map :changefn changefn))
                :togglebox [togglebox (merge {:ATOM ATOM :valpath valpath} opt-map)]
                :checkbox [checkbox (merge {:ATOM ATOM :valpath valpath} opt-map)]
                ;; default
                [:input.form-control input-map])]
    [:div.form-group
     {:class [(str id "_group") (when hidden "hidden")]}
     [:div.row
      [render-label {:for-id id
                     :label-text  (:label opt-map id)
                     :subtext sub}]
      [:div.col.val-area
       input
       invalid-feedback]]]))

(defn render-application
    "Render a browser form based on an input [sorted] map `fm`, with values to be stored/updated in atom `A`.
  Use an array-map or sorted-map as `fm` if you want to maintain order"
  [fm A & [pathv]]
  (for [[k v] (partition 2 fm) :let [path (conj (vec pathv) k)]]
    (cond
      (sequential? v) (render-application v A path)
      (map? v) ^{:key v} [tinput A path v]
      :default [:h3.error (str "Failed to render (type:" (type v) ") \n\n" fm)])))

(defn render-review ;; TODO: Allow to receive an Atom, giving the same arg profile as render-application
  "Parse the application map and render the review based on the ordered `schema` of the application, with values in `application` expected to be as given by `render-application`.
  
  Resulting form will be read-only with no changes possible."
  [schema application]
  (render-application
   (shared/reviewify schema)
   (atom application)))
