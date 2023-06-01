(ns reformation.application
  "The application with which users fill out the form to make or edit an application"
  (:require [reagent.core :as r]
            [reagent.session :as session]
            [accountant.core]
            [reformation.core :as rfc]
            [re-frame.core :as reframe]
            [reformation.reframe] ;; necessary for the re-frame tests
            [cljs.pprint :as pprint]))

                                        ;render-application returns a VECTOR with tinput at the front
(def f1 #(if (> (count %) 5)
           true
           nil))
(def f2 #(if (= "@" %)
           true
           nil))

(def example-atom (atom nil))

(def text-form "timing can be set to on-change and on-blur currently"
  [:example-element {:type :text
                     :validation {:timing :on-blur
                                  :validation-function f1
                                  :invalid-feedback "Needs more than 5 characters..."}
                     :label "Enter more than 5 characters"
                     :required true
                     :id "example1"}
   :example_element2 {:type :text
                      :validation-function f2
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
                      :on-change #(js/alert "changed")
                      :options [{:content "hi" :value "" :on-click #(js/alert "clicked")} "hello" "howdy"]
                      :id "example4"}])

(def my-atom (r/atom nil))

(def FILE (r/atom nil))

(def DICTIONARY {:example/input-kw {:type :text
                                    :label "default kw-mapped text"
                                    :default-value "something good"
                                    :disabled true
                                    :style-classes "I-like-red"}
                 :example/default-scalar "Just a value from a keyword"
                 :example/default-options ["option-1" "option-2" "option-3"]})
(def DICTIONARY2
  {:humplus/programs              ["one" "two"]
   :humplus/grant-permission-text "Permission text"
   :shared/USERNAME               "LovelyUser"})

(def test-form-with-map
  [:programs {:name      "internship-program"
              :required? true
              :label     "Select from among the following eligible programs"
              :type      :select
              :options   :humplus/programs}
   :other-explanation {:name        "other-explanation"
                       :required    true
                       :placeholder "Your program director,  program location, and program term/semester"
                       :label       "Description of your program"}
   :grant-permission {:name     "grant-permission"
                      :required true
                      :type     "checkbox"
                      :value    :humplus/grant-permission-text
                      :label    :humplus/grant-permission-text}
   :netid {:type  "hidden"
           :name  "netid"
           :value :shared/USERNAME}]
  )

(defn autocomplete-form
  "Form with only the autocomplete on it, for dev purposes"
  []
  [:an-autocomplete {:label "Dummy Autocomplete"
                     :type :autocomplete
                     :autocomplete-args {:fuzzy? true
                                         :display-key :value
                                         :data-subcription (r/atom ["Capaldi" "Whitaker" "Smith" "Tennet"])
                                         ; can I get away twithout a data-subscription, only with the read and update functions normal to reformation?
                                         }}]
  )

(defn test-form []
  [:myhidden-text {:type :hidden
                   :default-value "whisper"}
   :a-js-date {:default-value (js/Date.)
               :label "using render-application"
               :disabled true}
   :a-name {:default-value (get (js->clj js/USER) "username")
            :label "Username"
            :disabled true}
   #_#_:an-autocomplete {:label "Dummy Autocomplete"
                     :type :autocomplete
                     :autocomplete-args {:fuzzy? true
                                         :display-key :value
                                         ; can I get away twithout a data-subscription, only with the read and update functions normal to reformationz?
                                         }}
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
                #_#_ :validation {:timing :on-change
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
                  :submit-fn #(js/alert "Trying to submit:")
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
    "Save"]])

(def data-sources {:atom my-atom
                   :map {:DICTIONARY DICTIONARY2
                         :READ
                         (fn [kv]
                           @(reframe/subscribe [:read-form-item kv]))
                         #_(partial get-in @my-atom)
                         :UPDATE
                         (fn [kv update-function]
                           ;; dispatch-sync is required here, because the defer involved in plain reframe/dispatch causes the synthetic event to be released and the fn breaks. 
                           (reframe/dispatch-sync [:update-form kv update-function]))}})
[:forms :address :street-name] (constantly "that-thing-they-typed")

(def chosen-datasource (r/atom :map))
;; re-frame.db/app-db

(defn save-button
  []
  [:a.button {:id "Save"
              :title "Submit form"
              :on-click #(when (rfc/report-form-validation)
                           (js/alert "Passed"))
              :href nil} "Save"])

(defn generate-form []
  (let [form-id "needs-validation"]
    [:div.submission-form 
     [:form.form-control {:id form-id}
      #_ [rfc/tinput
       (data-sources @chosen-datasource)
       [:test-js-val]
       {:label "Testing date"
        :disabled true
        :default-value (js/Date.)}]

      (into [:div.form-contents]
                                        ;[:h1 "hello"]
            #_(rfc/render-application text-form (data-sources @chosen-datasource))
            (rfc/render-application (autocomplete-form)  (data-sources @chosen-datasource))
            ;(rfc/render-application (test-form)  (data-sources @chosen-datasource))
            #_(rfc/render-application test-form-with-map (data-sources @chosen-datasource))
            )]]))

(defn datasource-panel []
  [:div [:span {:on-click (fn [e]
                            (swap! chosen-datasource #(do (println %)
                                                          (case % :atom :map :map :atom))))}
         (str "Chosen datasource (click to toggle): " @chosen-datasource)]])

(defn data-panel []
  [:div 
   (case @chosen-datasource
     :atom (str @(data-sources @chosen-datasource))
     :map (str @(reframe/subscribe [:read-form-item []])))])

(defn app-page []
  [:div.container.mycontent
   [generate-form]
   [datasource-panel]
   [data-panel]
                                        ;[form-component]
   [save-button]])
