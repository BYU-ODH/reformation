(ns reagent-forms.routes.admin
  (:require [reagent-forms.layout :as layout]
            [compojure.core :refer [defroutes context GET POST DELETE PATCH]]
            [clojure.java.io :as io]
            [reagent-forms.db
             [core :as db]
             [users :as users]
             [admins :as admins]
             [email :as dbe]
             [pwlogins :as pwlogins]
             [approvals :as approvals]
             [applications :as applications]]
            [reagent-forms.comments :as comments]
            [reagent-forms.application :as application]
            [reagent-forms.auth :as auth]
            [reagent-forms.mail :as mail]
            [ring.util.http-response :as response]))

(defn sanitized-user-byu-data
  "Keep only the needed parts of userdata"
  [uid]
  (select-keys (users/get-user-byu-data uid) [:preferred-name :net-id :work-email]))

(defn attach-approver-information
  "Attach the current approver information to collection of applications"
  [applications]
  (for [a applications] (assoc a :next-approvers (approvals/next-approvals-needed (:id a)) ;; TODO shoudln't be getting the whole list
                               )))

(defn attach-sanitized-user-data
  [applications]
  (for [a applications]
    (update a :applicant sanitized-user-byu-data)))


(defn applications-for-display
  "Get the payload of applications for the user to display, with :admin if the user is an admin"
  [user-id]
  (let [logic-id (:id (approvals/get-default-logic))
        basic-payload
        {:reviews (-> (approvals/get-approvable-applications user-id)
                      attach-sanitized-user-data
                      attach-approver-information)
         :proposals {:active (-> (users/get-applications-for-user user-id)
                                 attach-sanitized-user-data)
                     :concluded nil ;; TODO
                     }}
        final-payload (if (admins/is-admin? user-id logic-id)
                        (assoc basic-payload :admin
                               (-> (admins/all-admin-applications user-id logic-id)
                                   attach-sanitized-user-data
                                   attach-approver-information))
                        basic-payload)]
    (list final-payload)))

(defn apply-decision
  "Apply approval or denial on `application-id`"
  [approval-id approves?]
  (if (approvals/is-next-approval? approval-id)
    (let [approval-function (if approves? approvals/apply-approval! approvals/apply-denial!)
          approval-string (if approves? "applied" "denied")]
      (approval-function approval-id)
      (response/ok (str "Approval " approval-string ".")))
    (response/unauthorized "Approval is not recognized as one of the next approvals for this application.")))

(defn approver-notified?
  "Check whether a notification email has been sent to the approver"
  [approver-id application-id]
  (some? (dbe/mail-receipt-notifications-for-user approver-id application-id)))


(defn decide-and-proceed
  "Apply approval decision. Disable pwlogin for this review.
  If approval, establish and contact next approver(s) if applicable."
  [{:keys [user-id approval-id approves?]
    :as dapmap}]
  (when (not (every? (complement nil?) (vals dapmap)))
    (throw (ex-info "Required value not provided to decide-and-proceed" {:dapmap dapmap})))
  (let [application-id (approvals/get-application-id-for-approval approval-id)
        decision (apply-decision approval-id approves?)]
    (pwlogins/disable-all-user-pwlogins! user-id application-id)
    (mail/emails-after-decision application-id approves?)
    decision))

(defn assign-reviewers
  "Assign the given reviewers to the application, and notify them."
  [{:keys [application-id assigner approval-id approves? comment]
    {:keys [reviewer1 reviewer2]} :next-reviewers
    :as dapmap}]
  (let [logic-id (:id (approvals/get-default-logic))
        decision (apply-decision approval-id true)]
    (when (not (every? (complement nil?) (vals dapmap)))
      (throw (ex-info "Required value not provided to decide-and-proceed" {:dapmap dapmap})))
    (pwlogins/disable-all-user-pwlogins! assigner application-id)
    (approvals/set-approver-by-position! {:application-id application-id
                                          :approver-id (:id (users/get-new-or-existing-user (:email reviewer1)))
                                          :position-name "REVIEWER1"
                                          :logic-id logic-id})
    (approvals/set-approver-by-position! {:application-id application-id
                                          :approver-id (:id (users/get-new-or-existing-user (:email reviewer2)))
                                          :position-name "REVIEWER2"
                                          :logic-id logic-id})
    (mail/faculty-review-request application-id)
    decision))

(defroutes routes
  (context "/admin" req
           (GET "/applications" [user-id :as req]
                (applications-for-display (Integer. user-id)))
           (POST "/application/approve" [user-id approval-id next-approver]
                 (decide-and-proceed {:user-id user-id :approval-id approval-id :approves? true :next-approver next-approver}))
           (POST "/application/deny" [user-id approval-id comment]
                 (decide-and-proceed {:user-id user-id :approval-id approval-id :approves? false :comment comment}))
           (GET "/is-admin" [user-id] (list (admins/is-admin? (Integer. user-id))))
           (GET "/application/approval" [user-id application-id]
                (list (approvals/get-approver-approval (Integer. user-id) (Integer. application-id))))

           ;; COMMENTS
           (GET "/application/comments" [application-id user-id]
                (comments/get-application-comments-with-userdata (Integer. application-id) (Integer. user-id)))
           (POST "/application/comment" [user-id application-id comment visible-to-applicant]
                 (let [cmap  {:author-id user-id
                              :application-id application-id
                              :comment-text comment
                              :visible-to-applicant visible-to-applicant}]
                   (comments/create-comment cmap)))
           (POST "/application/comment/reply" [application-id user-id comment reply-to] (let [cmap  {:author-id user-id
                                                                                                     :application-id application-id
                                                                                                     :comment-text comment
                                                                                                     :reply-to-cid reply-to}]
                                                                                          (comments/create-comment cmap)))
           (PATCH "/application/comment" [application-id user-id comment-id comment :as cmap]
                  (println ">>>>My cmap is:")
                  (prn cmap)


                  (comments/update-comment {:application-id application-id
                                            :user-id user-id
                                            :id comment-id
                                            :comment comment}))

           (DELETE "/application/comment" [application-id user-id comment-id :as dmap]
                   (comments/delete-comment (select-keys (:params dmap) [:application-id :user-id :comment-id])))
           
           (GET "/application" [application-id user]
                (let [application-id (db/string-to-int application-id)
                      application (applications/READ application-id)]
                  (list (update application :applicant sanitized-user-byu-data))))))
