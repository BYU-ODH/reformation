(ns reformation.core
  (:require [reformation.multitable :refer [multi-table] :as mt]
            [reformation.fileupload :refer [file-upload]]
            [reformation.validateform :as vf]
            [reformation.shared :as shared]
            ;[reformation.validation :as vali]
            #?(:cljs [reagent.core :refer [atom]])
            [clojure.string :as string]
            [com.rpl.specter :as s]
            [com.rpl.specter.protocols]))

;; This is needed for the Specter recursive transform to work in cljs. https://github.com/redplanetlabs/specter/issues/312
(extend-type #?(:clj clojure.lang.AFn :cljs cljs.core/MetaFn)
  com.rpl.specter.protocols/ImplicitNav
  (implicit-nav [this] (s/pred this)))

(declare tinput render-application render-review)

(def fm-map-atom "This atom is set when render-application is called" (atom nil))

(defn check-form-validation []
  (vf/validate-form))

(defn report-form-validation
  "Creates a popup informing the user which 'required' fields are filled in improperly, doesn't work unless render-application has been called first."
  []
  (vf/validate-form-feedback @fm-map-atom))

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
    (cond
      (keyword? options) "need the dictionary"
      (sequential? options)
      (into [:select.form-control {:class style-classes
                                   :id id
                                   :name id
                                   :required required
                                   :on-change on-change}]
            (for [{:keys [content value on-click] :as o} options]
              (let [[c v] [(or content value o) (or value content o)]]
                [:option {:value v :on-click on-click}
                 c]))))))


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
  opts includes optional `:rows` and `cols` for the html \"rows=\"
  and \"cols=\" attributes."
  [opt-map]
  (let [{:keys [id input-value placeholder disabled label valpath changefn value char-count on-change required class rows cols validation on-blur]
         :or {rows 5}} opt-map
        {:keys [limit enforce?]} char-count
        {:keys [timing] :or {timing :on-change}} validation 
        textarea
        [:textarea.form-control {:id id
                                 :class class
                                 :name id 
                                 :rows rows
                                 :cols cols
                                 :default-value input-value
                                 :value value
                                 :on-change on-change
                                 ;timing on-blur
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

(defn checkset
  "If a checkbox value is nil, set it; otherwise, return it."
  [{:keys [READ UPDATE  valpath default-value]}]
  (let [v (READ valpath)
        dv (boolean default-value)]
    (if (boolean? v)
      v
      (do
        #(UPDATE valpath (constantly dv))
        dv))))

(defn checkbox
  "Create a checkbox"
  [{:keys [_READ UPDATE valpath] :as fn-map}
   {:keys [validation-function disabled style-classes default-value] :as _input-map}]
  (let [checked? (checkset (merge fn-map {:default-value default-value}))
        toggle-fn (comp (or validation-function identity)
                        #(UPDATE valpath not))]
    [:input {:class (into [(last valpath)] style-classes)
             :type "checkbox"
             :checked checked?
             :disabled disabled
             :on-change toggle-fn}]))

(defn togglebox
  "Builds a group which, when toggled, displays its `:content`"
  [{:keys [_label content valpath _READ _UPDATE _default-value override-inline? open-height disabled _style-classes]
    :or {open-height "5em"}
    :as opt-map}]
  (let [_content-id "togglebox-content"
        checked? (checkset opt-map)
        transition-style {:-webkit-transition "height 0.4s ease-in-out"
                          :transition "height 0.4s ease-in-out"
                          :overflow "hidden"}]
    [:div.togglebox
     [tinput (select-keys opt-map [:READ :UPDATE :default-value :style-classes]) valpath
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

(defn tinput
  "Produce data-bound inputs for a given map, using `:READ` and `:UPDATE` for values and changes. `opt-map` specifies options including display variables."
  [{:keys [READ UPDATE DICTIONARY] :as fn-map} valpath & [opt-map]]
  (let [{:keys [char-count contingent default-value disabled hidden id required style-classes subtext type placeholder name-separator validation]
         :or {name-separator "-"
              id (string/join "-" (map name valpath))
              type "text"
              default-value ""}} opt-map
        {:keys [timing validation-function invalid-feedback]
         :or {timing :on-blur
              validation-function (:validation-function opt-map)
              invalid-feedback (:invalid-feedback opt-map)}} validation
        {:keys [limit enforce?]} char-count
        {:keys [field-key contingent-fn]} contingent
        _init (when (and default-value (nil? (READ valpath)))
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
        opt-map (merge opt-map (merge {:name id
                                       timing changefn
                                       :required required}
                                      (when (= timing :on-change) {:value input-value})))
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
    (if (= :hidden (keyword type))
      input
      [:div.field
       {:class [(str id "_group") (when hidden "hidden")]}
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

(defn from-dictionary
  "Return valid entries `k` from `dictionary`, or error meaningfully"
  [dictionary k]
  (let [v (get dictionary k)]
    (cond
      ((complement qualified-keyword?) k) (do (println "unqualified keyword:: " k) k)
      (not v) (throw (ex-info (str "No " k " in DICTIONARY") {:DICTIONARY dictionary}))
      ((some-fn vector? map? string?) v) (do (println "Success checking " k) v)
      (fn? v) (v)
      :unknown (throw (ex-info (str "type of value in " k " not known")
                               {:type (type v)
                                :keyword k
                                :DICTIONARY dictionary})))))

(def substructure?
  "Determine whether an item is a valid substructure for a form"
  (every-pred
   vector?
   #(coll? (first %))))

(defn keywordize-form
  "Transform all keyword values in the form `fm` into their `dictionary` lookups"
  [fm dictionary]
  (let [
        TreeValues
        (s/recursive-path [] p
                          [s/ALL (s/cond-path
                                  ;; need to handle the vector, kw part of things. If we are on a bare non-collection in the a vector, just move on
                                  [s/LAST qualified-keyword?] [s/LAST] ;; if it's a namespaced keyword, select it
                                  [s/LAST substructure?] [s/LAST s/ALL p] ;; if it's a vector with valid substructure, go recursive on it
                                  ;; if it's anything else, pass on it
                                  )])
        get-from-dictionary (partial from-dictionary dictionary)]
                                        ;(s/transform [s/ALL map? TreeValues] get-from-dictionary fm)
    (s/transform [s/ALL (s/cond-path map? TreeValues)] get-from-dictionary fm)))

(defn render-application
  "Render the editable application.

  `fm` is the schema of the application, a vector laying out the fields and their attributes.
  `fn-map` is either an Atom to hold the information a user inputs, or a map that must with:
  
  `:READ` a function that takes args with the same signature as get-in
  `:UPDATE` a function that takes args with the same signature as update-in
  `:DICTIONARY`(optional) a map of keyword to reformation-compatible structures
  "
  [fm fn-map & [pathv]]
  (reset! fm-map-atom fm)
  (cond (atom? fn-map)
        (let [R (partial get-in @fn-map)
              U (partial swap! fn-map update-in)
              fn-map {:READ R :UPDATE U}]
          (render-application fm fn-map pathv))
;;;;;;;;;;;;;;;;
        (map? fn-map)
        (let [dictionary (:DICTIONARY fn-map)
              fm (if dictionary ;; can I pull off a dissoc around here?
                   (keywordize-form fm dictionary)
                   fm)]
          
          (for [[k v] (partition 2 fm)
                :let [path (conj (vec pathv) k)]]
            (cond
              (sequential? v) (render-application v fn-map path)
              (map? v) ^{:key v} (tinput fn-map path v)
              ;;(map? v) ^{:key v} [tinput fn-map path v]

              :default [:h3.error (str "Failed to render (type:" (type v) ") \n\n" fm)])))
        :else (throw (ex-info "Unsupported arg for atom-or-map" {:atom-or-map fn-map}))))


(defn render-review
  "Parse the application map and render the review based on the ordered `schema` of the application, with values in `application` expected to be as given by `render-application`.
   Resulting form will be read-only with no changes possible."
  [schema application]
  (render-application
   (shared/reviewify schema)
   (atom application)))

(comment
  (let [real-d {:humplus/programs ["one" "two"]
                :humplus/grant-permission-text "Permission text"
                :shared/USERNAME "LovelyUser"}
        FILE (atom {})
        vmreal [:myhidden-text {:type :hidden
                                :default-value "whisper"}
                :mydefault-text {:type :text
                                 :label "default text"
                                 :default-value "something good"
                                 :disabled true
                                 :style-classes "I-like-red"}
                :mytext {:type :text
                         :label "My text"}
                :mytextarea {:type :textarea
                             :rows 4
                             :cols 100
                             :label "My textarea"
                             :char-count {:limit 500
                                          :enforce? true}
                             :validation {:timing :on-change
                                          :validation-function #(= "@" %)}}
                :mymultitable  {:label "My multitable"
                                :id :mymulti
                                :required? true
                                :type :multi-table
                                :style-classes ["is-striped" "is-fullwidth" "is-hoverable"]
                                :min-rows 2
                                :subtext "Indicate any expenses involved in carrying out your request, including a reason for each expense"
                                :value-path [:my-multitable]
                                :sum-field :amount
                                :columns [{:key :item
                                           :title "Item"}
                                          {:key :amount
                                           :title "Amount"
                                           :input-type "number"}

                                          {:key :purpose
                                           :title "Purpose"
                                           :input-type "textarea"}
                                          {:key :justification
                                           :title "Justification"
                                           :input-type "radio"
                                           :options ["I really want it"
                                                     "Department needs it"
                                                     "Have to use full budget or it will get cut"]}
                                          ]}

                :myselect {:label "A select" :type :select :options [1 2 3]}
                :myradio {:type :radio :options [1 2 {:value 3}]}
                
                :mytoggle {:type :togglebox
                           :label "My togglebox"
                           :content [:test {:type :text :label "My toggled "}]}
                :mycheckbox {:type :checkbox :label "My checkbox" :default-value true}
                :myfileupload {:type :file
                               :label "My file"
                               :submit-text "Click or Drop a File Here"
                               :error-text "Maybe We had an error?"
                                        ;:submit-button [:a.btn.btn-success "Submit!"]
                               :submit-fn #(println "Trying to submit:")
                               :save-fn #(reset! FILE %)                               
                               :allowed-extensions-f #{"txt"}
                               :style-classes {:drag-over "dragover"
                                               :inactive "undragged"
                                               :have-file "have-file"}}
                [:a.button {:id "Save"
                            :alt "Save"
                            :type :submit
                            :title "Save"
                            ;;:on-click validate-and-submit
                            :href nil}
                 "Save"]
                :example_element2 {:type :text
                                   :invalid-feedback "Just type @..."
                                   :label "Enter the @ symbol"
                                   :required true
                                   :id "example2"}
                :example_element3 {:type :date
                                   :validation {:timing :on-blur
                                                :validation-function #(not= % nil)}
                                   :label "Enter a date"
                                   :required true
                                   :id "example3"}
                :example_element4 {:type :select
                                   :label "Select"
                                   :validation {:validation-function #(println "Howdy")}
                                   :required true
                                   ;:on-change #(js/alert "changed")
                                   ;:options [{:content "hi" :value "" :on-click #(js/alert "clicked")} "hello" "howdy"]
                                   :id "example4"}
                ]
        substructure? (every-pred
                       vector?
                       #(coll? (first %)))
        TreeValues
        (s/recursive-path [] p
                          [s/ALL (s/cond-path
                                  ;; need to handle the vector, kw part of things. If we are on a bare non-collection in the a vector, just move on
                                  [s/LAST qualified-keyword?] [s/LAST] ;; if it's a namespaced keyword, select it
                                  [s/LAST substructure?] [s/LAST s/ALL p] ;; if it's a vector with valid substructure, go recursive on it
                                  ;; if it's anything else, pass on it
                                  )])
        get-from-dictionary (partial from-dictionary real-d)]
    
    ;;(s/transform [s/ALL map? TreeValues] get-from-dictionary vmreal)
    (keywordize-form vmreal real-d)
    )
;;;;;;;;;;;;;;;;;;;;; end 1

  ;; end dictionary parse
  (let [a (atom {})
        FILE (atom {})
        fm [:myhidden-text {:type :hidden
                            :default-value "whisper"}
            ;; :mydefault-text {:type :text
            ;;                  :label "default text"
            ;;                  :default-value "something good"
            ;;                  :disabled true
            ;;                  :style-classes "I-like-red"}
            ;; :mytext {:type :text
            ;;          :label "My text"}
            ;; :mytextarea {:type :textarea
            ;;              :rows 4
            ;;              :cols 100
            ;;              :label "My textarea"
            ;;              :char-count {:limit 500
            ;;                           :enforce? true}
            ;;              :validation {:timing :on-change
            ;;                           :validation-function #(= "@" %)}}
            :mymultitable  {:label "My multitable"
                            :id :mymulti
                            :required? true
                            :type :multi-table
                            :style-classes ["is-striped" "is-fullwidth" "is-hoverable"]
                            :min-rows 2
                            :subtext "Indicate any expenses involved in carrying out your request, including a reason for each expense"
                            :value-path [:my-multitable]
                            :sum-field :amount
                            :columns [{:key :item
                                       :title "Item"}
                                      {:key :amount
                                       :title "Amount"
                                       :input-type "number"}

                                      {:key :purpose
                                       :title "Purpose"
                                       :input-type "textarea"}
                                      {:key :justification
                                       :title "Justification"
                                       :input-type "radio"
                                       :options ["I really want it"
                                                 "Department needs it"
                                                 "Have to use full budget or it will get cut"]}
                                      ]}

            ;; :myselect {:label "A select" :type :select :options [1 2 3]}
            ;; :myradio {:type :radio :options [1 2 {:value 3}]}
            
            ;; :mytoggle {:type :togglebox
            ;;            :label "My togglebox"
            ;;            :content [:test {:type :text :label "My toggled "}]}
            ;; :mycheckbox {:type :checkbox :label "My checkbox" :default-value true}
            ;; :myfileupload {:type :file
            ;;                :label "My file"
            ;;                :submit-text "Click or Drop a File Here"
            ;;                :error-text "Maybe We had an error?"
            ;;                             ;:submit-button [:a.btn.btn-success "Submit!"]
            ;;                :submit-fn #(println "Trying to submit:")
            ;;                :save-fn #(reset! FILE %)                               
            ;;                :allowed-extensions-f #{"txt"}
            ;;                :style-classes {:drag-over "dragover"
            ;;                                :inactive "undragged"
            ;;                                :have-file "have-file"}}
            ;; [:a.button {:id "Save"
            ;;             :alt "Save"
            ;;             :type :submit
            ;;             :title "Save"
            ;;             ;;:on-click validate-and-submit
            ;;             :href nil}
            ;;  "Save"]
            ;; :example_element2 {:type :text
            ;;                    :invalid-feedback "Just type @..."
            ;;                    :label "Enter the @ symbol"
            ;;                    :required true
            ;;                    :id "example2"}
            ;; :example_element3 {:type :date
            ;;                    :validation {:timing :on-blur
            ;;                                 :validation-function #(not= % nil)}
            ;;                    :label "Enter a date"
            ;;                    :required true
            ;;                    :id "example3"}
            ;; :example_element4 {:type :select
            ;;                    :label "Select"
            ;;                    :validation {:validation-function #(println "Howdy")}
            ;;                    :required true
            ;;                    :on-change #(js/alert "changed")
            ;;                    :options [{:content "hi" :value "" :on-click #(js/alert "clicked")} "hello" "howdy"]
            ;;                    :id "example4"}
            ]]
    (into [:div.form]
          (render-application fm a))
    )

  
  )
