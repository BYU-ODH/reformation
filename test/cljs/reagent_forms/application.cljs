(ns reagent-forms.application
  "The application with which users fill out the form to make or edit an application"
  (:require [reagent.core :as r]
            [reagent.session :as session]
            [reagent-forms.shared-test :as shared :refer [cx]]
            [accountant.core]
            [reagent-forms.routes :as rt]
            [reagent-forms.core :as rfc]))

{:user
 {:name "Testerly Test",
  :email "toryanderson@byu.edu",
  :username "tsatest"},
 :chair {:name "Tory", :email "tory_anderson@byu.edu"},
 :faculty-participants "mandatory fac"}


(def hmeg-default [:date-client {:label "Date"
                                 :required? true
                                 :disabled true
                                 :value (js/Date.)}
                   :faculty-participants {:label "Faculty Participant(s)"
                                          :required? true}
                   :abstract {:label "Abstract"
                              :subtext "Provide a one-paragraph overview of the research; it’s central organizing questions and key details of method and scope, including its mentoring dimension."
                              :type :textarea}
                   :description {:label "Description of the project"
                                 :subtext "Provide some context for the project, its background and significance. How does it relate to the faculty mentor’s research interests? How will it contribute to larger disciplinary concerns? What is the current status of the research? What is the scope of the work under this grant, and what are its primary methods?"
                                 :type :textarea
                                 :required? true}
                   :anticipated {:label "Anticipated Outcomes"
                                 :subtext "Describe key outcomes of the project. These should include research outcomes as well as outcomes related to mentoring, including specific products of the work."
                                 :type :textarea}
                   :qualifications {:label "Qualifications"
                                    :subtext "How is the faculty mentor well-situated to conduct/oversee the research and mentor students? Explain this in the context of past experience and ongoing work."
                                    :type :textarea}
                   :budget ["Number of undergraduate students" {:label "Number of undergraduate students" :type :number}
                            "Budget for undergraduate students" {:label "Budget for undergraduate students" :type :number}
                            "Number of graduate students" {:label "Number of graduate students" :type :number}
                            "Budget for graduates" {:label "Budget for graduates" :type :number}
                            "Budget for supplies" {:label "Budget for supplies" :type :number}
                            "Explanation of supplies" {:label "Explanation of supplies" :type :textarea}
                            "Budget for travel" {:label "Budget for travel" :type :number}
                            "Explanation of travel" {:label "Explanation of travel" :type :textarea}
                            "Budget for other items" {:label "Budget for other items" :type :number}
                            "Explanation of other items" {:label "Explanation of other items" :type :textarea}
                            "Total budget" {:label "Total budget " :type :number}]
                   :timeline {:label "Timeline"
                              :subtext "Detail plans for completing each phase of the project including final completion date. An outcomes report must be submitted to the college no later than December 1, 2020."
                              :type :textarea}
                   :chair [:name {:label "Department Chair"
                                  :required? true}
                           :email {:label "Department Chair's Email"
                                   :required? true}]])

(def submission-default [:title {:label "Project Title"
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
                                             :input-type "textarea"}]
                                  ;; Item, Amount, Purpose (TOTAL)
                                  }
                         :scholarship {:label "Scholarly Sources"
                                       :required? true
                                       :type :textarea
                                       :subtext "Provide an annotated list of sources relevant to your research."}
                         :faculty-mentor [:name {:label "Faculty Mentor Name"
                                                 :required? true
                                                 :place-holder "(Your Faculty Mentor)"}
                                          :email [:label "Faculty Mentor Email"
                                                  :required? true]]])


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
   [:p "Guidelines for operational aspects of international study programs may be found on our Faculty Resources page at " [:a {:href "http://kennedy.byu.edu/reagent-forms/faculty/index.php"} "http://kennedy.byu.edu/reagent-forms/faculty/index.php"]
    ", listed as “Principles to Guide International Study Programs”. Programs must adhere to the BYU International Travel Policy found at " [:a {:href "travelsmart.byu.edu"} "travelsmart.byu.edu."]]])

(defn generate-form []
  (let [form-id "needs-validation"]
    [:div.submission-form 
     [:form.form-control {:id form-id}
      (into [:div.form-contents]            
            (rfc/render-application hmeg-default SUBMISSION))]]))

(defn app-page []
  (shared/page-template {:jumbo-title "Humanities Undergraduate Grant Application"
                                        ;:jumbo-contents jumbotext
                         :contents [generate-form]
                         }))
