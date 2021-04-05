(ns reformation.application
  "The application with which users fill out the form to make or edit an application"
  (:require [reagent.core :as r]
            [reagent.session :as session]
            ;[reformation.shared-test :as shared]
            [accountant.core]
            ;[reformation.routes :as rt]
            [reformation.core :as rfc]
            [re-frame.core :as reframe]
            ;[reformation.reframe]
            [cljs.pprint :as pprint]))



;render-application returns a VECTOR with tinput at the front

(def f1 #(if (> (count %) 5)
                 true
                 nil))
(def f2 #(if (= "@" %)
           true
           nil))

(def example-atom (atom nil))

(def text-form [:example-element {:type :text
                                  :validation-function f1
                                  :invalid-feedback "Needs more than 5 characters..."
                                  :label "Enter more than 5 characters"
                                  :required true 
                                  :id "example1"}
                :example_element2 {:type :text
                                   :validation-function f2
                                   :invalid-feedback "Just type @..."
                                   :label "Enter the @ symbol"
                                   :required true
                                   :id "example2"}])

(def my-atom (r/atom nil))

(def FILE (r/atom nil))

(def test-form [:myhidden-text {:type :hidden
                                :default-value "whisper"}
                :mydefault-text {:type :text
                                 :label "default text"
                                 :default-value "something good"
                                 :disabled true
                                 :style-classes "I-like-red"}
                :mytext {:type :text
                         :label "My text"}
                :mytextarea {:type :textarea
                             :label "My textarea"
                             :char-count {:limit 500
                                          :enforce? true}}
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
                :mycheckbox {:type :checkbox :label "My checkbox"}
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
                   :map {:READ
                         (fn [kv]
                           @(reframe/subscribe [:read-form-item kv]))
                         #_(partial get-in @my-atom)
                         :UPDATE
                         (fn [kv update-function]
                           ;; dispatch-sync is required here, because the defer involved in plain reframe/dispatch causes the synthetic event to be released and the fn breaks. 
                           (reframe/dispatch-sync [:update-form kv update-function]))
                         #_(partial swap! my-atom update-in)}})

(def chosen-datasource (r/atom :atom))

(defn save-button
  []
  [:div {:style {:margin-top "10px"}}
   [:a.button {:id "Save"
               :alt "Save"
               :type :submit
               :title "Submit form"
               :form "needs-validation"
               :on-click #(if (rfc/check-form-validation)
                            (do
                              (js/alert "Passed Validation")
                              (reset! my-atom nil))
                            (js/alert "Please fill out all fields properly."))
                                        
               :href nil}
    "Save"]])

(defn generate-form []
  (let [form-id "needs-validation"]
    [:div.submission-form 
     [:form.form-control {:id form-id}
      (into [:div.form-contents]
            (rfc/render-application text-form (data-sources @chosen-datasource))
            ;(rfc/render-application test-form  (data-sources @chosen-datasource))
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
   #_[form-component]
   [save-button]
   ])
