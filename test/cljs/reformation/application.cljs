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
(f1 "12345")
(def f2 #(if (= "@" %)
           true
           nil))

(def example-atom (atom nil))

(defn built-in-email-constraint
  []
  [:div
   [:input {:type "text"
           :value ""
           :on-change #()}]
   ])

(def easy-form [:example-element {:type :text
                                  :validation-function f1
                                  :invalid-feedback "Needs more than 5 characters..."
                                  :label "Enter more than 5 characters"
                                  :id "example1"}
                :example_element2 {:type :text
                                   :validation-function f2
                                   :invalid-feedback "Just type @..."
                                   :label "Enter the @ symbol"
                                   :id "example2"}
                #_#_:example_email {:type :email
                                :label "Enter email"
                                :is "email"}
                ])
(def id "example1")

#_(defn check-valid-fn
  [id]
  (.reportValidity
    (.getElementById js/document id)))

#_(defn add-red-outline-fn
  [id]
  (. (.getElementById js/document id) setAttribute "style" "border: 2px solid #FF0000"))

;(check-valid-fn "example1")
;(add-red-outline-fn "example1")

(defn form-component []
  [:div
   [rfc/render-application easy-form example-atom]
   #_(rfc/render-application easy-form example-atom)])

;;(. (. js/document getElementById "example1") -value)
(comment (def form-dom-id "example1"))

(defn validate-and-submit "Validate the form and submit"
  [form-dom-id]
  (let [form (.getElementById js/document form-dom-id)
        ;update-id (session/get :application)
        ]
    (-> form .-classList (.add "invalid"))
    (if (.checkValidity form)
      (js/alert "Passes validation")
      (js/alert "Didn't Pass Validation"))))



(defn validation-function?
  [f]
  (:validation-function? (meta f)))

(defn to-validation 
  "Given a predicate, wrap it properly to be a validation function for tinput.

  Validation function runs on the input at every change, altering the validity of the element as prescribed. It waits for .checkValidity on the input to explain the error"
  [f & [error-message]]
  (if (validation-function? f) f 
      (with-meta (fn [click]
                   (let [v (. (. js/document getElementById "example1") -value) 
                         dom-element (. js/document getElementById "example1")
                         ;v (.. click -target -value)
                         ;dom-element (.. click -target)
                         error-message (or error-message "Invalid input")]
                     (if (f v)
                       (.setCustomValidity dom-element "")
                       (.setCustomValidity dom-element error-message)))) {:validation-function? true}
        )
     ) (println (str "VALIDATION FN:\n" (:validation-function (meta f)))))



(def my-atom (r/atom nil;{:mything "hello"}
              ))

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
               :on-click #(rfc/check-form-validation)
                                        ;#(validate-and-submit "needs-validation")
               :href nil}
    "Save"]])

(defn generate-form []
  (let [form-id "needs-validation"]
    [:div.submission-form 
     [:form.form-control {:id form-id}
      (into [:div.form-contents]
            (rfc/render-application easy-form (data-sources @chosen-datasource))
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
