(ns reformation.application
  "The application with which users fill out the form to make or edit an application"
  (:require [reagent.core :as r]
            [reagent.session :as session]
            [reformation.shared-test :as shared :refer [cx]]
            [accountant.core]
            [reformation.routes :as rt]
            [reformation.core :as rfc]))

;; {:user
;;  {:name "Testerly Test",
;;   :email "toryanderson@byu.edu",
;;   :username "tsatest"},
;;  :chair {:name "Tory", :email "tory_anderson@byu.edu"},
;;  :faculty-participants "mandatory fac"}

(def humgrants-default  [:title {:label "Project Title"
                                 :required? true}
                         :date-client {:label "Date"
                                       :required? true
                                       :disabled true
                                       :value (js/Date.)}
                         :major {:label "Major"
                                 :required? true}
                         :purpose-and-significance {:label "Purpose and Significance"
                                                    :required? true

                                                    :type :textarea
                                                    :subtext [:div [:h6 "Things to Consider:"] [:p "Provide a concise rationale for your project. What is the central research question and why is it significant? How will it contribute to a larger disciplinary conversation?"]]}
                         :research-description {:label "Description of Research"
                                                :required? true

                                                :type :textarea
                                                :subtext [:div [:h6 "Things to consider:"] [:p "Explain your research process including the key steps or stages involved and what you will need to be successful."]]}
                         :outcomes-description {:label "Description of Outcomes"
                                                :required? true

                                                :type :textarea
                                                :subtext [:div [:h6 "Things to consider:"] [:p "What will be the " [:i "product(s)"] " of your research? How will you demonstrate results? What will " [:i "your"] " outcomes be—what will you be able to do (do better) because of this work? Why will the experience be valuable given your future plans and goals?"]]}
                         :qualifications {:label "Qualifications"
                                          :required? true

                                          :type :textarea
                                          :subtext [:div [:h6 "Things to consider:"] [:p "Explain how you are prepared to be successful with this project. What experience have you had—with previous research, with previous coursework—that will inform this project? Describe your faculty mentor’s role in this project. How will your mentor’s background and interests contribute to your success?"]]}
                         :timetable {:label "Timetable"
                                     :required? true

                                     :type :textarea
                                     :subtext "Indicate when you will accomplish each part of your project, including final completion date."}
                         :budget {:label "Budget"
                                  :required? true

                                  :type :multi-table
                                  :subtext "Indicate any expenses involved in carryout out your research, including a reason for each expense."
                                  :value-path [:proposed-budget]
                                  :sum-field :amount
                                  :columns [{:key :item
                                             :title "Item"}
                                            {:key :amount
                                             :title "Amount"
                                             :input-type "number"}
                                            {:key :purpose
                                             :title "Purpose"
                                             :input-type "textarea"}]}
                         :scholarship {:label "Scholarly Sources"
                                       :required? true

                                       :type :textarea
                                       :subtext "Provide an annotated list of sources relevant to your research."}
                         :disabled {:label "Do you have a physical or mental disability?"
                                    :type :togglebox
                                    :open-height "9em"
                                    :content [:disability-explanation {:type :textarea
                                                                       :label "Explanation of Disability"}]}
                         :faculty-mentor [:name {:label "Faculty Mentor Name"
                                                 :required? true

                                                 :place-holder "(Your Faculty Mentor)"}
                                          :email {:label "Faculty Mentor Email"
                                                  :required? true}]]) 

(def hmeg-default [:disability
                   {:type :togglebox
                    :open-height "10em"
                    ;:default-value false
                    :label "Are you disabled?"
                    :content [:disabled-explanation
                              {:label "Explanation for your disability"
                               :type :textarea}]}
                   :next-reviewers
                   [:reviewer1
                    [:name {:label "Reviewer 1"
                            :required? true
                            :subtext "Provide the email address of the first reviewer for this application. Must be an odd number of chars"
                            :validation-function #(odd? (count %))
                            :invalid-feedback "You must have an odd number of chars"}
                     :email {:label "Email for reviewer 1"
                             :required? true}]]
                   :select-box {:label "Selectbox for required"
                                :type :select
                                :required? true
                                :options [{:content "SELECT" :value ""}
                                          {:content "First" :value 1}
                                          {:content "Second" :value 2}]}])


(def SUBMISSION
  (rfc/reset-default (r/atom {}) hmeg-default))

(defn validate-and-submit "Validate the form and submit"
  [form-dom-id]
  (let [form (.getElementById js/document form-dom-id)
        update-id (session/get :application)]
    (-> form .-classList (.add "was-validated"))
    (if (.checkValidity form)
      (js/alert "You have errors in your form. Please correct them before submitting."))))

(defn tinput [value-fun & [opt-map]]
  (let [valpath (if (keyword? value-fun)
                  [value-fun]
                  value-fun)]
    (rfc/tinput SUBMISSION valpath opt-map)))

(def jumbotext
  [:div.info
   [:p "After approval by the appropriate college, operational elements of the program being proposed will be evaluated by Kennedy Center staff, while its academic quality and effectiveness are reviewed by the Academic Oversight Committee. This committee places special emphasis on clarity of learning outcomes and demonstration of appropriate purpose and rigor. Programs will be listed in the catalog under the sponsoring unit, and learning outcomes for approved programs should be placed on the BYU learning outcomes site. The sponsoring academic unit is responsible for program outcomes; however, the Oversight Committee will periodically review learning effectiveness in international programs."]
   [:p "Guidelines for operational aspects of international study programs may be found on our Faculty Resources page at " [:a {:href "http://kennedy.byu.edu/reformation/faculty/index.php"} "http://kennedy.byu.edu/reformation/faculty/index.php"]
    ", listed as “Principles to Guide International Study Programs”. Programs must adhere to the BYU International Travel Policy found at " [:a {:href "travelsmart.byu.edu"} "travelsmart.byu.edu."]]])

(defn generate-form []
  (let [form-id "needs-validation"
        validate (fn [e] (let [s (shared/get-value-from-change e)
                               element (.. e -target)]
                           (if (even? (count s))
                             (.setCustomValidity element "")
                             (.setCustomValidity element "You're odd!"))))]
    [:div.submission-form 
     [:form.form-control {:id form-id}
      (into [:div.form-contents
             [:a.btn.btn-success {:on-click #(.reportValidity (.getElementById js/document form-id))}
              "Validate"]]
            (rfc/render-application hmeg-default SUBMISSION)
            )]]))

(defn app-page []
  (shared/page-template {:jumbo-title "Reformation Application"
                         :contents [:div.mycontent
                                    [generate-form]]}))
