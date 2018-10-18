(ns reagent-forms.application
  "Logic and controllers for handling the application-flow process"
  (:require [reagent-forms.db.approvals :as approvals]
            [reagent-forms.db.applications :as applications]
            [reagent-forms.db.users :as users]
            [reagent-forms.db.core :as db]
            [honeysql.core :as sql]
            [honeysql.helpers :as h]
            [reagent-forms.data :as data]))

(defn get-initial-approver-email-address
  "Get the approver email address that was initially provided when the application was submitted."
  [application]
  (let [application (cond (number? application) (applications/READ application [:form])
                          (map? application) (:form application application)
                          :else (throw (ex-info "Invalid application" {:type (type application) :application application})))
        search-path [:faculty-mentor :email]
        email (get-in application search-path)]
    (or email
        (throw (ex-info "Initial approver not found."
                        {:application application
                         :search-path search-path})))))

(defn register-submission
  "Receiving a webform `submission`, create the applicant user
  if necessary, add the submission to the database,
  initialize approvals and approvers. "
  ([submission]
   (let [logic-id (:id (approvals/get-default-logic))]
     (register-submission submission logic-id)))
  ([submission logic-id]
   (let [application (applications/create-application-from-submission submission)
         aid (:id application)
         approver-email-address (get-initial-approver-email-address submission)
         applicant-id (-> application :form :user :username users/get-new-or-existing-user :id)
         applicant-email (-> application :form :user :email (users/create-or-assign-email-for-user applicant-id))]
     (approvals/initialize-approvals! aid logic-id)
     (approvals/set-approver-by-position! {:application-id aid
                                           :approver-id (:id (users/get-set-user-by-email approver-email-address))
                                           :position-name "MENTOR"
                                           :logic-id logic-id})
     (db/READ :applications aid))))

(defn edit-application
  "Edit an existing application"
  [user-id application-id update-map]
  (println "I want to edit this application with (under or dash?)")
  (prn update-map)

  (when (applications/is-applicant? application-id user-id)
    (applications/UPDATE application-id {:form update-map})))

(defn get-author
  "Get the author for an application"
  [application-id]
  (applications/READ application-id [:applicant]))
