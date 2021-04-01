(ns reformation.core
  (:require [reformation.multitable :refer [multi-table] :as mt]
            [reformation.fileupload :refer [file-upload]]
            [reformation.shared :as shared]
            ;[reformation.validation :as vali]
            #?(:cljs [reagent.core :refer [atom]])
            [clojure.string :as string]

            ))
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
  [{:keys [for-id label-text]}]
  [:label.label {:for for-id}
   label-text])

(defn select-box [m]
  (let [{:keys [options id on-change required style-classes]
         :or {id "generic-select"
              options ["No :options provided"]}} m]
    (into [:select.form-control {:class style-classes
                                 :id id
                                 :name id
                                 :required required
                                 :on-change on-change}]
          (for [{:keys [content value] :as o} options]
            (let [[c v] [(or content value o) (or value content o)]]
              [:option {:value v}
               c])))))


(defn radio [{:keys [options on-change]}]
  (into [:div.form-group]
        (let [nom `name#]
          (for [o options]
            (let [[v disp] (if (map? o)
                             (let [{:keys [value contents]} o]
                               [(or value contents)
                                (or contents value)])
                             [o o])

                  v (cond (map? o) (or (:value o)
                                       (:contents o))
                          :default o)
                  disp (cond (map? o) (or (:contents o)
                                          (:value o))
                             :default o)
                  idsym (gensym v)]
              [:div [:input.form-control {:id idsym :type "radio" :name nom :value v
                                          :on-change on-change}]
               [:label {:for idsym} disp]])))))


(defn text-area 
  "Renders `:type :textarea` elements. In addition to the usual
  opts includes optional `:rows` for the html \"rows=\" attribute."
  [opt-map]
  (let [{:keys [id input-value placeholder disabled label valpath changefn value char-count on-change required class rows]
         :or {rows 5}} opt-map
        {:keys [limit enforce?]} char-count
        
        textarea
        [:textarea.form-control {:id id
                                 :class class
                                 :name id 
                                 :rows rows
                                 :default-value input-value
                                 :value value
                                 :on-change on-change
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
                   (println "Got here")
                   (let [v (.. click -target -value)
                         dom-element (.. click -target)
                         error-message (or error-message "Invalid input")]
                     (if (f v)
                       (do
                         (.setCustomValidity dom-element "")
                         (.reportValidity dom-element)
                         (-> dom-element .-classList (.remove "invalid"))
                         )
                       (do
                         (.setCustomValidity dom-element error-message)
                         (.reportValidity dom-element)
                         (-> dom-element .-classList (.add "invalid"))
                         )))) {:validation-function? true})))

(defn checkbox
  "Create a checkbox"
  [{:keys [READ UPDATE valpath] :as fn-map}
   {:keys [validation-function disabled style-classes] :as input-map}]
  (let [checked? (READ valpath)
        toggle-fn (comp (or validation-function identity)
                        #(UPDATE valpath not))]
    [:input {:class (into [(last valpath)] style-classes)
             :type "checkbox"
             :disabled disabled
             :on-change toggle-fn}]))

(defn checkset
  "If a checkbox value is nil, set it; otherwise, return it."
  [{:keys [READ UPDATE  valpath default-value]}]
  (let [v (READ valpath)
        dv (boolean default-value)]
    (if (boolean? v)
      v
      (UPDATE valpath (constantly dv)))))


(defn togglebox
  "Builds a group which, when toggled, displays its `:content`"
  [{:keys [label content valpath READ UPDATE default-value override-inline? open-height disabled style-classes]
    :or {open-height "5em"}
    :as opt-map}]
  (let [content-id "togglebox-content"
        checked? (checkset opt-map)
        transition-style {:-webkit-transition "height 0.4s ease-in-out"
                          :transition "height 0.4s ease-in-out"
                          :overflow "hidden"}]
    [:div.togglebox
     [tinput (select-keys opt-map [:READ :UPDATE :style-classes]) valpath
      {:type :checkbox
       :checked checked?
       :disabled disabled
       :label ""}]
     [:div.toggle-content
      {:class (if checked? "togglebox-show" "togglebox-hidden")
       :style (when-not override-inline?
                (assoc transition-style :height (if checked? open-height "0em")))}
      (render-application content opt-map)]]))

(defn hidden-input 
  "Generate a hidden input"
  [input-map]
  (let [{:keys [value id]} input-map]
    [:input {:type "hidden"
             :name id :id id
             :value value}]))

(defn invalid-feedback-el [invalid-feedback]
  [:div.invalid-feedback invalid-feedback])

;id validation-function required? type default-value disabled subtext invalid-feedback char-count hidden style-classes contingent rows placeholder name-separator
;;]
;:or
#_{name-separator "-"
   id (string/join "-" (map name valpath))
   type "text
;"} ;} opt-map


(defn tinput
  "Produce data-bound inputs for a given map, using `:READ` and `:UPDATE` for values and changes. `opt-map` specifies options including display variables."
  [{:keys [READ UPDATE] :as fn-map} valpath & [opt-map]]
  (let [{:keys [char-count contingent default-value disabled hidden id invalid-feedback required? style-classes subtext type validation-function rows placeholder name-separator]
         :or {name-separator "-"
              id (string/join "-" (map name valpath))
              type "text"}} opt-map
        {:keys [limit enforce?]} char-count
        {:keys [field-key contingent-fn]} contingent
        _init (when (and default-value (not (READ valpath)))
                (UPDATE valpath (constantly default-value)))
        input-value (or (READ valpath) default-value)
        changefn1 (fn [e] (UPDATE valpath #(shared/get-value-from-change e))) ;if changes update val
        call-validation-function (when-let [vf validation-function]
                                   (to-validation vf invalid-feedback))
        changefn (cond
                   validation-function (fn [e] (doto e
                                                 changefn1
                                                 call-validation-function))
                   enforce? (fn [e]
                              (let [v (shared/get-value-from-change e)]
                                (cond
                                  (= limit (dec (count v))) identity
                                  (< limit (count v)) #(UPDATE valpath (constantly (apply str (take limit v))))
                                  :default (changefn1 e))))
                   :default changefn1)
        opt-map (merge opt-map {:name id
                                :on-change changefn
                                :value input-value
                                :required required?})
        #_#_input-map (merge {:type type
                          :id id
                          :name id
                          :on-change changefn
                          :default-value default-value
                          :placholder placeholder
                          :value input-value}
                         (when style-classes
                           {:class style-classes})
                         (when disabled
                           {:disabled disabled})
                         (when required?
                           {:required true})
                         (when rows
                           {:rows rows}))
        
        input (case type
                :radio [radio opt-map]
                :select [select-box opt-map]
                :multi-table [multi-table fn-map opt-map]
                :textarea [text-area opt-map]
                :togglebox [togglebox (merge (assoc fn-map :valpath valpath) opt-map)]
                :checkbox [checkbox (assoc fn-map :valpath valpath) opt-map]
                :file [file-upload opt-map]
                :hidden [hidden-input opt-map]
                ;; default
                [:input.form-control opt-map])]
    
    (println (str "\nFn-map:\n" fn-map))
    (println (str "\nVal-path:\n" valpath))
    (println (str "\nOpt-map:\n" opt-map))
    (case type
      :hidden input
      [:div.field
       {:class [(str id "_group") (when hidden "hidden")]}
       [render-label {:for-id id
                      :label-text  (:label opt-map id)}]
       (when subtext
         [:p.help subtext])
       [:div.control 
        
        input
        (when invalid-feedback
          [:div.invalid-feedback invalid-feedback])
        ]])))

(defn atom?
  "ducktype an atom as something dereferable"
  [a]
  (try (do (deref a) true)
       (catch #?(:clj Exception :cljs js/Error) _ false)))

(defn render-application
  "Render the editable application.

  `fm` is the schema of the application, a vector laying out the fields and their attributes.
  `fn-map` is either an Atom to hold the information a user inputs, or a map "
  [fm fn-map & [pathv]]
  (cond (atom? fn-map)
    (let [R (partial get-in @fn-map)
          U (partial swap! fn-map update-in)
          fn-map {:READ R :UPDATE U}]
      (render-application fm fn-map pathv))

    (map? fn-map)
    (for [[k v] (partition 2 fm)
          :let [path (conj (vec pathv) k)]]
      (cond
        (sequential? v) (render-application v fn-map path)
        (map? v) ^{:key v} [tinput fn-map path v]

        :default [:h3.error (str "Failed to render (type:" (type v) ") \n\n" fm)]))
    :else (throw (ex-info "Unsupported arg for atom-or-map" {:atom-or-map fn-map}))))


(defn render-review
  "Parse the application map and render the review based on the ordered `schema` of the application, with values in `application` expected to be as given by `render-application`.
   Resulting form will be read-only with no changes possible."
  [schema application]
  (render-application
   (shared/reviewify schema)
   (atom application)))
