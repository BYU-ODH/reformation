(ns reagent-forms.application
  "The application with which users fill out the form to make or edit an application"
  (:require [reagent.core :as r]
            [reagent.session :as session]
            [reagent-forms.shared-test :as shared :refer [cx]]
            [accountant.core]
            [reagent-forms.routes :as rt]
            [reagent-forms.core :as rfc]
            [ajax.core :refer [GET POST]]))

;;TODO: Validation


(def hmeg-default (array-map :date-client [:label "Date"
                                                 :required? true
                                                 :disabled true
                                                 :value (js/Date.)]
                                   :faculty-participants [:label "Faculty Participant(s)"
                                                          :required? true]
                                   :abstract [:label "Abstract"
                                              :subtext "Provide a one-paragraph overview of the research; it’s central organizing questions and key details of method and scope, including its mentoring dimension."
                                              :type :textarea]
                                   :description [:label "Description of the project"
                                                 :subtext "Provide some context for the project, its background and significance. How does it relate to the faculty mentor’s research interests? How will it contribute to larger disciplinary concerns? What is the current status of the research? What is the scope of the work under this grant, and what are its primary methods?"
                                                 :type :textarea
                                                 :required? true]
                                   :anticipated [:label "Anticipated Outcomes"
                                                 :subtext "Describe key outcomes of the project. These should include research outcomes as well as outcomes related to mentoring, including specific products of the work."
                                                 :type :textarea]
                                   :qualifications [:label "Qualifications"
                                                    :subtext "How is the faculty mentor well-situated to conduct/oversee the research and mentor students? Explain this in the context of past experience and ongoing work."
                                                    :type :textarea]
                                   :budget {"Number of undergraduate students" [:label "Number of undergraduate students" :type :number]
                                            "Budget for undergraduate students" [:label "Budget for undergraduate students" :type :number]
                                            "Number of graduate students" [:label "Number of graduate students" :type :number]
                                            "Budget for graduates" [:label "Budget for graduates" :type :number]
                                            "Budget for supplies" [:label "Budget for supplies" :type :number]
                                            "Explanation of supplies" [:label "Explanation of supplies" :type :textarea]
                                            "Budget for travel" [:label "Budget for travel" :type :number]
                                            "Explanation of travel" [:label "Explanation of travel" :type :textarea]
                                            "Budget for other items" [:label "Budget for other items" :type :number]
                                            "Explanation of other items" [:label "Explanation of other items" :type :textarea]
                                            "Total budget" [:label "Total budget " :type :number]}
                                   :timeline [:label "Timeline"
                                              :subtext "Detail plans for completing each phase of the project including final completion date. An outcomes report must be submitted to the college no later than December 1, 2020."
                                              :type :textarea]
                                   :chair {:name [:label "Department Chair"
                                                  :required? true]
                                           :email [:label "Department Chair's Email"
                                                   :required? true]}))

(def submission-default (array-map :title [:label "Project Title"
                                           :required? true]
                                   :date-client [:label "Date"
                                                 :required? true
                                                 :disabled true
                                                 :value (js/Date.)]
                                   :major [:label "Major"
                                           :required? true]
                                   :purpose-and-significance [:label "Purpose and Significance"
                                                              :required? true
                                                              :type :textarea
                                                              :subtext [:div [:h6 "Things to Consider:"] [:p "Provide a concise rationale for your project. What is the central research question and why is it significant? How will it contribute to a larger disciplinary conversation?"]]]
                                   :research-description [:label "Description of Research"
                                                          :required? true
                                                          :type :textarea
                                                          :subtext [:div [:h6 "Things to consider:"] [:p "Explain your research process including the key steps or stages involved and what you will need to be successful."]]]
                                   :outcomes-description [:label "Description of Outcomes"
                                                          :required? true
                                                          :type :textarea
                                                          :subtext [:div [:h6 "Things to consider:"] [:p "What will be the " [:i "product(s)"] " of your research? How will you demonstrate results? What will " [:i "your"] " outcomes be—what will you be able to do (do better) because of this work? Why will the experience be valuable given your future plans and goals?"]]]
                                   :qualifications [:label "Qualifications"
                                                    :required? true
                                                    :type :textarea
                                                    :subtext [:div [:h6 "Things to consider:"] [:p "Explain how you are prepared to be successful with this project. What experience have you had—with previous research, with previous coursework—that will inform this project? Describe your faculty mentor’s role in this project. How will your mentor’s background and interests contribute to your success?"]]]
                                   :timetable [:label "Timetable"
                                               :required? true
                                               :type :textarea
                                               :subtext "Indicate when you will accomplish each part of your project, including final completion date."]
                                   :budget [:label "Budget"
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
                                            ]
                                   :scholarship [:label "Scholarly Sources"
                                                 :required? true
                                                 :type :textarea
                                                 :subtext "Provide an annotated list of sources relevant to your research."]
                                   :faculty-mentor (array-map
                                                    :name [:label "Faculty Mentor Name"
                                                           :required? true
                                                           :place-holder "(Your Faculty Mentor)"]
                                                    :email [:label "Faculty Mentor Email"
                                                            :required? true])))


(def SUBMISSION
  (shared/reset-default (r/atom {}) hmeg-default))

(defn submit! "Submit the SUBMISSION atom as a new form"
  []
  (let [url "/submit"
        method POST
        pmap {:handler (fn [r] (js/alert "Your submission has been received")
                         (accountant.core/navigate! (rt/home)))
              :error-handler (fn [e] (js/alert "There has been an error"))
              :params {:submission @SUBMISSION}}]
    (method url pmap)))

(defn validate-and-submit "Validate the form and submit"
  [form-dom-id]
  (let [form (.getElementById js/document form-dom-id)
        update-id (session/get :application)]
    (-> form .-classList (.add "was-validated"))
    (if (.checkValidity form)
      (js/alert "You have errors in your form. Please correct them before submitting."))))

(defn submission-date-prompt []
  (let [d (@SUBMISSION :date-client)
        date-string (shared/format-date d)]
    [:div.form-group
     [:div.row
      [:div.col-md-3
       [:label "Date"]]
      [:div.col date-string]]]))

(defn tinput [value-fun & [opt-map]]
  (let [valpath (if (keyword? value-fun)
                  [value-fun]
                  value-fun)]
    (rfc/tinput SUBMISSION valpath opt-map)))

(defn tinput-in
  "Generate a function to either get or set a value along a path"
  ([in-path]
   (fn [m] (get-in m in-path)))
  ([in-path value]
   (fn [m value]
     (assoc-in m in-path value))))

(def jumbotext
  [:div.info
   [:p "After approval by the appropriate college, operational elements of the program being proposed will be evaluated by Kennedy Center staff, while its academic quality and effectiveness are reviewed by the Academic Oversight Committee. This committee places special emphasis on clarity of learning outcomes and demonstration of appropriate purpose and rigor. Programs will be listed in the catalog under the sponsoring unit, and learning outcomes for approved programs should be placed on the BYU learning outcomes site. The sponsoring academic unit is responsible for program outcomes; however, the Oversight Committee will periodically review learning effectiveness in international programs."]
   [:p "Guidelines for operational aspects of international study programs may be found on our Faculty Resources page at " [:a {:href "http://kennedy.byu.edu/reagent-forms/faculty/index.php"} "http://kennedy.byu.edu/reagent-forms/faculty/index.php"]
    ", listed as “Principles to Guide International Study Programs”. Programs must adhere to the BYU International Travel Policy found at " [:a {:href "travelsmart.byu.edu"} "travelsmart.byu.edu."]]])

(defn user-information []
  [:div.user-details
   [tinput [:user :name] {:label "Your Name"
                          :disabled true
                          :subtext "*Name as per your BYU profile."} ]
   [tinput [:user :email] {:label "Your Email Address"
                           :disabled true
                           :subtext "*Email as per your BYU profile."}]])

(defn sanitize-for-edit
  "Sanitize a map for editing to be the current submission"
  [f]
  (-> f
      (update :date-client #(js/Date. %))
      (assoc :update (js/Date.))))

(defn get-form-for-edit 
  "Request the form for editing from the back-end"
  [application-id]
  (if-let [f (session/get! :edit-form)]
    (reset! SUBMISSION (sanitize-for-edit f))
    (shared/get-application
     {:user-map {}
      :application-id application-id
      :receptacle-atom SUBMISSION
      :filter-fn (comp sanitize-for-edit :form)})))

(defn submit-button
  "Generate the button for submitting a new application or the edits to an existing application"
  [form-dom-id]
  (let [update-id (session/get :application)]
    (if update-id 
      [:a.btn.btn-warning {:on-click #(validate-and-submit form-dom-id)} "Update"]
      [:a.btn.btn-primary {:on-click #(validate-and-submit form-dom-id)} "Submit"])))

(defn revision-cancel-button []
  [:a.btn.btn-danger.cancel-revisions
   {:href (rt/review-route {:application (session/get :application)})
    :on-click (fn [click]
                (.preventDefault click)
                (when (js/confirm "Discard your changes?")
                  (shared/go-to (rt/review-route {:application (session/get :application)}))))}
   "Cancel Revisions"])

(defn render-application
    "Render a browser form based on an input [sorted] map `fm`, with values to be stored/updated in atom `A`"
  [fm A & [pathv]]
  (for [[k v] fm :let [path (conj (vec pathv) k)]]
    (cond
      (vector? v) [rfc/tinput A path (apply hash-map v)] 
      (map? v) (render-application v A path) 
      :default [:h3.error (str "Failed to render (type:" (type v) ") " fm)])))

(defn generate-form []
  (when-let [application-id (session/get :application)]
    (when-not (:update @SUBMISSION)
      (get-form-for-edit application-id)))
  (let [form-id "needs-validation"]
    [:div.submission-form 
     [:form.form-control {:id form-id}
      (into [:div.form-contents]
            (render-application hmeg-default SUBMISSION))
      [submit-button form-id]]]))

(defn app-page []
  (shared/page-template {:jumbo-title "Humanities Undergraduate Grant Application"
                                        ;:jumbo-contents jumbotext
                         :contents [generate-form]
                         }))
