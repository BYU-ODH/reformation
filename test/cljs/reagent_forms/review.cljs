(ns reagent-forms.review
  "Review an application, providing approval or comments if eligibility is correct"
  (:require [reagent.core :as r]
            [reagent.session :as session]
            [reagent-forms.shared :as shared]
            [reagent-forms.routes]
            [reagent-forms.shared.components.input :as input]
            [reagent-forms.reviews :refer [APPLICATIONS] :as reviews]
            [reagent-forms.shared.auth :as auth]
            [reagent-forms.application :as application]
            [reagent-forms.approval-common :as approval]
            [reagent-forms.comments :as comments]
            [accountant.core :as accountant]
            [clojure.string :as str]
            [reagent-forms.shared.components.lightbox :as lb]
            [reagent-forms.core :as rf]
            [ajax.core :refer [GET POST]]))

;;;TODO: Add comment functions
(defonce THIS-APPROVAL (r/atom nil))

(defonce NEXT-APPROVER (r/atom {:name ""
                            :email ""
                            :verify-email ""}))

(defonce APPLICATION (r/atom nil))

(defonce HOLD-DECISION (r/atom nil))

(defn init-hold-decision 
  "Cause hold-decision to display"
  []
  (reset! HOLD-DECISION {:comment ""}))


(defn _get-this-approval
  "Request from the server all comments belonging to this application"
  []
  (let [app-num (-> @APPLICATION :id)
        user-id (auth/get-user-id)
        method GET
        url "/admin/application/approval"
        pmap {:handler (fn [r]
                         (reset! THIS-APPROVAL (first r)))
              :error-handler (fn [e]
                               (.log js/console "-------ERROR getting approval!")
                               (.log js/console e))
              :params {:user-id user-id
                       :application-id app-num}}]
    (when (and app-num user-id)
      (method url pmap))))

(defn get-this-approval [&[force?]]
  (when (or force?
            (empty? @THIS-APPROVAL)) (_get-this-approval))
  @THIS-APPROVAL)



(defn refresh-approvals []
  (reviews/get-applications))

(defn get-application
  "Grab the application from the reviews selection, or query the server with the appropriate credentials and retrieve the application"
  [application-id & [force?]]
  (let [reviews-page-application (-> (filter (fn [a] (= application-id (:id a)))
                                             (into (:reviews @APPLICATIONS)
                                                   (:proposals @APPLICATIONS)))
                                     first)]
    (if reviews-page-application
      (reset! APPLICATION reviews-page-application)
      (shared/get-application {:application-id application-id
                               :user-map (auth/get-usermap)
                               :receptacle-atom APPLICATION
                               :force? force?}))))

(defn _submit-approval
  "Gather the current user info and approval number and submit approval"
  [user-id approval-id]
  (let [method POST
        url "/admin/application/approve"
        pmap {:handler (fn [r] (do
                                 (js/alert "Approval Received") ;; TODO should be a notification
                                 (shared/go-to (reagent-forms.routes/reviews-dashboard-route))))
              :error-handler #(js/alert "There has been an error with your action. Please contact the admin.")
              :params (cond-> {:approval-id approval-id
                               :user-id user-id}
                        (not (shared/uninitialized-map-atom? NEXT-APPROVER)) (assoc :next-approver @NEXT-APPROVER))}]
    (method url pmap)))

(defn submit-approval []
  (let [user-id (auth/get-user-id)
        approval-id (:id @THIS-APPROVAL)
        next-approver-form-id "next-approver"
        form (.getElementById js/document next-approver-form-id)]
    (when form
      (-> form .-classList (.add "was-validated")))

    (if (or (not form)
            (.checkValidity form))
      (_submit-approval user-id approval-id)
      (js/alert (str "Please provide your "
                     (:approval_name @THIS-APPROVAL)
                     "'s name and email address.")))))



(defn _submit-denial
  "Gather the current user info and approval number and submit approval"
  [user application-id approval-id comment]
  (let [method POST
        url "/admin/application/deny"
        pmap {:handler (fn [r]
                         (.log js/console "Denial received")
                         (shared/go-to (reagent-forms.routes/reviews-dashboard-route)))
              :error-handler #(js/alert "There has been an error with your action. Please contact the admin.")
              :params {:application-id (js/parseInt application-id)
                       :approval-id approval-id
                       :user-id user
                       :comment comment}}]
    (method url pmap)))

(defn submit-denial []
  (let [user (auth/get-user-id)
        application-id (session/get :application)
        denial-comment (:comment @HOLD-DECISION)
        approval-id (:id @THIS-APPROVAL)]
    (_submit-denial user application-id approval-id denial-comment)))

(defn render-multi-section-content [m]
  (let [{:keys [tv-pairs title-string]} m ]
    (into [:div.multirow [:h2 title-string]]
          (for [[t v] tv-pairs]
            (shared/read-text t v)))))

(defn generic-multi-section [m]
  (let [{:keys [tv-pairs multi-table multi-title group-title-fun class]} m]
    (into [:div.review.multitable {:class class} [:h1 multi-title]]
          (for [row multi-table]
            (render-multi-section-content {:title-string (group-title-fun row)
                                           :tv-pairs (into [] (for [[v f] tv-pairs]
                                                                [v (f row)]))})))))
(defn _custom-boolean-text
  "Generates a function that produces the custom text
  on boolean result against row `map`"
  [key &[{:keys [yes no]
          :or {yes [:span.true "Yes"]
               no [:span.false "No"]}}]]
  (fn [map] (if (key map) yes no)))


(defn render-pair
  [display-map val]
  (let [display-map
        (cond
          (vector? display-map) (apply hash-map display-map)
                                        ;(map? val)
          )]
    [:div.row {:class [(when-not val "no-val")]}
     [:span.label.col (:label display-map)]
     [:span.val.col (if (empty? val)
                      "Not Given"
                      val)]]))

(defn render-review
  "Parse the application map and render the review based on the ordered `schema` of the application"
  [& [{:keys [application schema]
       :or {application @APPLICATION
            schema application/submission-default}}]]
  (let [f (:form application)]
    [:div.review
     (rf/render-review application/submission-default f)
     ;(application/render-application (input/reviewify application/submission-default) (r/atom f))
     ]))

(defn render-approval-buttons []
  [:div.approval-buttons
   [:a.btn.btn-primary {:on-click submit-approval} "Approve"]
   [:a.btn.btn-danger {:on-click init-hold-decision} "Hold"]])

(defn role-format [s]
  (-> s
      (str/replace #"-" " ")
      (str/split #" ")
      (->> (map str/capitalize)
           (str/join " "))))

(defn render-approvals []
  (when-let [n (:approval_name @THIS-APPROVAL)]
    (let [role (when (= "CHAIR" n) "Associate Dean")
          vf (fn [e] (let [matching (-> @NEXT-APPROVER :email)
                           input (.-target e)]
                       (if (= (.-value input)
                              matching)
                         (.setCustomValidity input "")
                         (.setCustomValidity input "The emails don't match"))))
          next-approval (when role
                          [:div.next-approver
                           [:h2 "Next Approver"]
                           [:form#next-approver
                            [input/tinput NEXT-APPROVER [:name] {:label (str role "'s Name")
                                                                 :required? true}]
                            [input/tinput NEXT-APPROVER [:email] {:label (str role "'s Email Address")
                                                                  :required? true}]
                            [input/tinput NEXT-APPROVER [:verify-email] {:label (str "Verify Email Address")
                                                                         :required? true
                                                                         :id (str (clojure.string/lower-case role) "-verify")
                                                                         :invalid-feedback "The emails must match."
                                                                         :validation-function vf}]]])]
      (if next-approval 
        [:div.next-approvals
         [:h1 "Application Approvals"]
         next-approval]
        [:div.approvals.none]))))

(defn plant-hold-decision
  "When HOLD-DECISION is modified, dreagent-formslay the lightbox requesting a comment for that decision"
  []
  (when (some? @HOLD-DECISION)
    (lb/lightbox
     [:div.decision-comment
      [:h1 "Hold This Application?"]
      [:textarea {:on-change #(swap! HOLD-DECISION assoc :comment (shared/get-value-from-change %))
                  :value (:comment @HOLD-DECISION)}]
      [:div.controls
       [:a.btn.btn-success
        {:on-click submit-denial}
        "Submit"]
       [:a.btn.btn-danger
        {:on-click #(do (reset! HOLD-DECISION nil)
                        (lb/clear-lightbox))}
        "X"]]])))


(defn do-edit []
  (session/put! :edit-form (:form @APPLICATION))
  (accountant/navigate! (reagent-forms.routes/edit-route
                         {:application (-> @APPLICATION :id)})))


(defn edit-review
  "The edit button for the application in question"
  []
  (when (auth/can-edit? @APPLICATION)
    [:div.edit-control
     [:a.btn.btn-success
      {:on-click do-edit}
      "Edit Proposal"]]))


(defn review-page []
  (let [app-num (session/get :application)
        application (get-application app-num)
        _init-approval (get-this-approval)
        is-applicant? (auth/is-applicant? @APPLICATION)]
    [:div.review-page
     (shared/page-template {:page-class "review-application"
                            :jumbo-title (let [role (:approval-name @THIS-APPROVAL)
                                               rs (when role (auth/format-role role))]
                                           (str "Application " app-num " " rs " Review"))
                            :jumbo-subtitle [:div.review-sub
                                             [:p.title (str "\"" (-> @APPLICATION :form :title) "\"")]
                                             [:p.applicant
                                              (if is-applicant?
                                                [:span.self-proposal "Your Proposal"]
                                                [:span.reviewer-proposal
                                                 (str "Applicant: " (-> @APPLICATION :applicant :preferred-name))])]]
                            
                            :contents [:div.wrapper
                                       [render-review]
                                       (when-not is-applicant? [render-approvals])
                                       (if-not is-applicant?
                                         [render-approval-buttons]
                                         [:h2.error "You cannot render your own approval decisions."])]
                            })]))

