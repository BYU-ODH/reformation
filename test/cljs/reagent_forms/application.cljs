(ns reagent-forms.application
  "The application with which users fill out the form to make or edit an application"
  (:require [reagent.core :as r]
            [reagent.session :as session]
            [reagent-forms.shared :as shared :refer [cx]]
            [reagent-forms.shared.auth :as auth]
            [accountant.core]
            [reagent-forms.routes :as rt]
            [reagent-forms.shared.components.input :as input]
            [ajax.core :refer [GET POST]]))

;;TODO: Validation


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
  (shared/reset-default (r/atom {}) submission-default))

(defn submit! "Submit the SUBMISSION atom as a new form"
  []
  (let [url "/submit"
        method POST
        pmap {:handler (fn [r] (js/alert "Your submission has been received")
                         (accountant.core/navigate! (rt/home)))
              :__anti-forgery-token js/csrfToken
              :error-handler (fn [e] (js/alert "There has been an error"))
              :params {:submission @SUBMISSION}}]
    (method url pmap)))

(defn update! "Submit the SUBMISSION atom as an updated form"
  [update-id]
  (let [url "/update"
        method POST
        pmap {:handler (fn [r]
                         (session/remove! :application)
                         (session/remove! :edit-form)
                         (accountant.core/navigate! (rt/review-route {:application update-id})))
              :__anti-forgery-token js/csrfToken
              :error-handler (fn [e] (js/alert "There has been an error"))
              :params {:user-id (auth/get-user-id)
                       :application-id update-id
                       :submission @SUBMISSION}}]
    (method url pmap)))

(defn validate-and-submit "Validate the form and submit"
  [form-dom-id]
  (let [form (.getElementById js/document form-dom-id)
        update-id (session/get :application)]
    (-> form .-classList (.add "was-validated"))
    (if (.checkValidity form)
      (if (:update @SUBMISSION)
        (update! update-id)
        (submit!))
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
    (input/tinput SUBMISSION valpath opt-map)))

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
  (let [s? (auth/signed-in?)
        email (auth/get-user-email)
        name (auth/get-full-name)]
    (swap! SUBMISSION update :user assoc :email email :name name :username (auth/get-username))
    [:div.user-details
     [tinput [:user :name] {:label "Your Name"
                            :disabled true
                            :subtext "*Name as per your BYU profile."} ]
     [tinput [:user :email] {:label "Your Email Address"
                             :disabled true
                             :subtext "*Email as per your BYU profile."}]]))

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
     {:user-map (auth/get-usermap)
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
      (vector? v) [input/tinput A path (apply hash-map v)] 
      (map? v) (render-application v A path) 
      :default [:h3.error (str "Failed to render (type:" (type v) ") " fm)])))

(defn generate-form []
  (when-let [application-id (session/get :application)]
    (when-not (:update @SUBMISSION)
      (get-form-for-edit application-id)))
  (let [form-id "needs-validation"]
    [:div.submission-form 
     [:form.form-control {:id form-id}
      [:input {:type "hidden"
               :name "__anti-forgery-token"
               :value js/csrfToken}]
      [user-information]
      (into [:div.form-contents]
            (render-application submission-default SUBMISSION))
      [submit-button form-id]]]))

(defn app-page []
  (shared/page-template {:jumbo-title "Humanities Undergraduate Grant Application"
                                        ;:jumbo-contents jumbotext
                         :contents [generate-form]
                         }))
