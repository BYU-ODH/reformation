(ns reformation.core
  (:require [reformation.components :refer [components]]
            [reformation.multitable :refer [multi-table] :as mt]
            [reformation.fileupload :refer [file-upload]]
            [reformation.shared :as shared]
            [reformation.validation :as vali]
            [clojure.spec.alpha :as s]
            #?(:cljs [reagent.core :refer [atom]])
            [clojure.string :as string]))

(def dev-mode (atom true))

(defn set-dev-mode!
  ([arg]
   (reset! dev-mode (case arg
                      :on true
                      :off false))))

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

(defn checkset
  "If a checkbox value is nil, set it; otherwise, return it."
  [{:keys [READ UPDATE valpath default-value]}]
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



(defn invalid-feedback-el [invalid-feedback]
   [:div.invalid-feedback invalid-feedback])

(defn grab [kw og]
  (let [f (-> components kw :fn)]
    (if-not @dev-mode
      f
      (fn [& args]
        (s/explain (-> components kw :spec) og)
        (apply f args)))))


(defn tinput
  "Produce data-bound inputs for a given map, using `:READ` and `:UPDATE` for values and changes. `opt-map` specifies options including display variables."
  [fn-map valpath & [opt-map]]
  (let [og opt-map  ;og for "original"

        {:keys [READ UPDATE]} fn-map

        {:keys [attrs char-count contingent default-value disabled
                hidden id invalid-feedback required? subtext type validation-function]
         :or {id (string/join " " (map name valpath))
              type "text"}}                         opt-map
        
        {:keys [limit enforce?]} char-count
        {:keys [field-key contingent-fn]} contingent

        _init (when (and default-value (not (READ valpath)))
                (UPDATE valpath (constantly default-value)))
        input-value (or (READ valpath) default-value)

        changefn1 (fn [e] (UPDATE valpath #(shared/get-value-from-change e)))
        validation-function (when-let [vf validation-function]
                              (to-validation vf invalid-feedback))

        changefn (cond
                   validation-function (fn [e] (doto e changefn1 validation-function))
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
        fn-map (assoc fn-map :valpath valpath)
        
        
        input  (case type
                   :checkbox [(grab :checkbox og) fn-map opt-map]
                   :select   [(grab :select og) fn-map opt-map ]
                   :radio    [(grab :radio og) fn-map opt-map]
                   :textarea [(grab :textarea og) fn-map opt-map]
                   :hidden   [(grab :hidden og) fn-map opt-map]

                   :custom [(opt-map :fn) fn-map opt-map]
                   :multi-table [multi-table fn-map opt-map ]
                   :togglebox [togglebox (merge fn-map opt-map)]
                   :file [file-upload opt-map]


                
                   ;; default
                   [:input.form-control opt-map])]

    (case type
      :hidden input
      [:div.field
       {:class [(str id "_group") (when (opt-map :hidden) "hidden")]}
       [render-label {:for-id id
                      :label-text  (:label opt-map id)}]
       (when subtext
         [:p.help subtext])
       [:div.control      
        input
        (when invalid-feedback
          [:div.invalid-feedback invalid-feedback])]])))




(defn atom?
  "ducktype an atom as something dereferable"
  [a]
  (try (do (deref a) true)
       (catch #?(:clj Exception :cljs js/Error) _ false)))

(defn render-application [fm fn-map & [pathv]]
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
