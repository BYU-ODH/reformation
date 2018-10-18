(ns reagent-forms.auth
  (:require [reagent-forms.config :refer [env]]
            [reagent-forms.db.core :as db]
            [reagent-forms.db.users :as users]
            [reagent-forms.db.pwlogins :as pwlogins]
            [reagent-forms.db.approvals :as approvals]
            [reagent-forms.db.admins :as admins]
            [ring.util.http-response :as response]
            [buddy.hashers :as hashers]
            [reagent-forms.db.applications :as applications]))

(defn make-admin [user-id]
  (db/UPDATE :users user-id {:role "admin"}))

(defn validate-change-approval
  "Change the approval of an application given a
  request, if the request is valid"
  [application-id approval-name next-approver-email]
  (if-not (and application-id approval-name next-approver-email)
    (throw (ex-info "Invalid input to auth/validate-change-approval"
                    {:application-id application-id
                     :approval-name approval-name
                     :next-approver-email next-approver-email}))
    (approvals/set-approver-by-position!
     application-id
     (:id (users/get-set-user-by-email next-approver-email))
     approval-name)))

;; (defn get-applications-for-admin
;;   "Get the applications viewable by `admin-id`"
;;   [admin-id]
;;   (if (admins/is-admin? admin-id)
    
      
;;       ))

(defn valid-reviewer?
  "Return whether `user-id` is a valid reviewer for `application-id`, capable of viewing comments"
  [user-id application-id]
  ((set (approvals/approvers application-id)) user-id))

(defn is-applicant?
  "Is `user-id` the applicant for `application`?"
  [user-id application-id]
  (= user-id (applications/get-applicant-id application-id)))
