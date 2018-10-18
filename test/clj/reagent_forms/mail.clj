(ns reagent-forms.mail
  (:require [postal.core :as mail]
            [reagent-forms.config :refer [env]]
            [reagent-forms.application :as app]
            [reagent-forms.db
             [core :as db]
             [email :as dbe :refer [MESSAGE-TYPES]]
             [users :as users]
             [applications :as applications]
             [pwlogins :as pwlogins]
             [approvals :as approvals]]))

(defn log-message!
  "Log that a message is being sent to the database"
  [{:keys [from to body] :as message-map}
   &[message-info-map]]
  (let [log-map {:sender from
                 :recipients to
                 :message body
                 :info (cond-> {}
                         (:dev env) (assoc :dev true)
                         message-info-map (merge message-info-map))}]
    (dbe/create-log log-map)))


(defn send-message
  "send message and log the sending of that message"
  [message-map &[message-info-map server-map]]
  (let [server-map (or server-map
                       (-> env :reagent-forms :mail :server))]
    (mail/send-message server-map message-map)
    (log-message! message-map message-info-map)))

                                        ;(def application (-> (db/READ :applications) first))
(defn receipt-of-submission [application]
  (let [submitting-user (users/get-user (:applicant application))
        title-message (if-let [title (:title (:form application))]
                        (str ", \"" title "\", ")
                        " ") 
        message (str "Your ORCA proposal,"
                     title-message
                     "has been received. You will be notified with the result.")
        message-map (if-let [email (-> (:id submitting-user) users/get-email-addresses-for-user first :email)]
                      {:to [email]
                       :from "no-reply.reagent-forms@byu.edu"
                       :subject "[ORCA] Receipt of ISP Application"
                       :body message}
                      (throw (ex-info "No email address for submitting user."
                                      {:cause "No email address found"
                                       :user submitting-user})))
        message-info-map {:type (MESSAGE-TYPES :receipt)
                          :application-id (:id application)}]
    (if (:dev env)
      (log-message! message-map message-info-map)
      (send-message message-map message-info-map))))

(defn approval-request
  "Mail each approver, or just `approver-email-address`, for `application` a request for their approval"
  ([application]
   (let [application (cond (number? application) (applications/get-application application) 
                           (string? application) (throw (ex-info "Invalid application supplied to approval-request" {:application application}))
                           (map? application) application)
         approver-email-addresses (map #(for [e %] (:email e)) (approvals/next-approvers-emails (:id application)))]
     (doseq [address (flatten approver-email-addresses)]
       (approval-request application
                         address
                         (pwlogins/generate-review-link! (:id application) address)))))
  
  ([application approver-email-address review-link]
   (let [submitting-user (users/get-new-or-existing-user (:applicant application))
         approver-id (:id (users/get-user-by-email approver-email-address))
         application-title (applications/get-program-title application)
         
         message (str "Your approval is requested for "
                      (users/get-user-name submitting-user)
                      "'s ORCA application, \""
                      application-title "\""
                      "\n\n"
                      "Please review and submit your decision at the following link:\n\n"
                      review-link)
         message-map {:to (into []
                                (map :email (users/get-email-addresses-for-user approver-id)))
                      :from "no-reply.reagent-forms@byu.edu"
                      :subject "[ORCA] Approval Request for International Study Program"
                      :body message}
         message-info-map {:application-id (:id application)
                           :type (MESSAGE-TYPES :request)}]
     (if (:dev env)
       (do 
         (println "review link is >> " review-link)
         (log-message! message-map message-info-map))
       (send-message message-map message-info-map))
     review-link)))

(defn faculty-review-request
  "Mail each reviewer, or just `approver-email-address`, for `application` a request for their approval"
  ([application]
   (let [application (cond (number? application) (applications/get-application application) 
                           (string? application) (throw (ex-info "Invalid application supplied to approval-request" {:application application}))
                           (map? application) application)
         approver-email-addresses (map #(for [e %] (:email e)) (approvals/next-approvers-emails (:id application)))]
     (doseq [address (flatten approver-email-addresses)]
       (approval-request application
                         address
                         (pwlogins/generate-review-link! (:id application) address)))))
  
  ([application approver-email-address review-link]
   (let [submitting-user (users/get-new-or-existing-user (:applicant application))
         approver-id (:id (users/get-user-by-email approver-email-address))
         application-title (applications/get-program-title application)
         message (str "Dear Faculty Mentor,\n
Please follow the link to endorse your student’s proposal for
Humgrant funding. Offer your candid assessment of the proposed
research including its outcomes. Also comment on the student’s
qualifications and your interest in and suitability to work with this
student. In committing to serve as mentor, you will be expected to
provide a final endorsement of the outcomes once the project is
complete. \n\n" review-link)
        
         message-map {:to (into []
                                (map :email (users/get-email-addresses-for-user approver-id)))
                      :from "no-reply.reagent-forms@byu.edu"
                      :subject "[ORCA] Review Request for submission"
                      :body message}
         message-info-map {:application-id (:id application)
                           :type (MESSAGE-TYPES :request)}]
     (if (:dev env)
       (do 
         (println "review link is >> " review-link)
         (log-message! message-map message-info-map))
       (send-message message-map message-info-map))
     review-link)))

(defn all-notified? 
  "Are all the next-approvals for `application-id` notified that their approval is needed?"
  [application-id]
  (every? (comp not-empty #(dbe/mail-requests-for-user % application-id))
          (map :approver-user (approvals/next-approvals-needed application-id))))

(defn emails-after-decision
  "Send the appropriate emails for `application-id` given decision `approves?`"
  [application-id approves?]
  (if approves?
    (do
        (cond
          ;(approvals/application-approved? application-id)
          ;(mail/approved-notification application-id)
          ;; 
          (not (all-notified? application-id)) 
          (approval-request application-id)))
      ;(mail/revision-request application-id)
      ))
