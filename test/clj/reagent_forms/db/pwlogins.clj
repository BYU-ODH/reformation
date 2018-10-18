(ns reagent-forms.db.pwlogins
  (:require [reagent-forms.config :refer [env]]
            [reagent-forms.db.core :as db]
            [reagent-forms.db.approvals :as approvals]
            [reagent-forms.db.users :as users]
            [reagent-forms.db.email :as email]
            [honeysql.core :as sql]
            [honeysql.helpers :as h]))

(def CREATE (partial db/CREATE :pwlogins))
(def READ (partial db/READ :pwlogins))
(def UPDATE (partial db/UPDATE :pwlogins))
(def DELETE (partial db/DELETE :pwlogins))


(defn valid? [pwlogin]
  (and (nil? (:access-date pwlogin))
       (nil? (get-in pwlogin [:additional-info :disabled]))))

(defn review-login? [pwlogin]
  (let [pwlogin (if (number? pwlogin)
                  (db/READ :pwlogins pwlogin)
                  pwlogin)]
    (boolean (get-in pwlogin [:additional-info :approval-id]))))

(defn get-approval-application-by-pwlogin [pwlogin]
  (if (review-login? pwlogin)
    (let [pwlogin (if (number? pwlogin) (db/READ :pwlogins pwlogin) pwlogin)]
      (->> pwlogin :additional-info :approver (db/READ :approvers)))
    (throw (ex-data "Not a review login" {:arg pwlogin}))))

(defn get-valid-pwlogins
  ([&[email-id]]
   (let [ad-requirement [:= :access-date nil]
         email-requirement [:= :email-id email-id]
         where-statement (if email-id
                           [:and ad-requirement
                            email-requirement]
                           ad-requirement)]
     (->> {:select [:*]
          :from [:pwlogins]
          :where where-statement}
         sql/format
         db/dbr
         (filter valid?)))))

(defn get-pwlogin-by-code [code]
  (-> (h/select :*)
      (h/from :pwlogins)
      (h/where [:= :code code])
      sql/format
      db/dbr
      first))

(defn get-pwlogins-valid-for-application
  "Get the active pwlogins for application"
  [application-id]
  (filter #(= application-id (get-in % [:additional-info :application-id])) (get-valid-pwlogins)))

(defn get-user-pwlogins-for-application
  "Get the valid pwlogins that belongs to a user for an application"
  [user-id application-id]
  (let [emails (email/email-addresses-for-user user-id)
        user-email-ids (set (map :id emails))]
    (filter #(user-email-ids (:email-id %)) (get-pwlogins-valid-for-application application-id))))


(defn create-pwlogin [valmap]
  (let [valmap (if (:additional-info valmap)
             (update valmap :additional-info db/to-pg-json)
             valmap)]
    (db/CREATE :pwlogins valmap)))

(defn update-pwlogin [pid valmap]
  (let [valmap (if (:additional-info valmap)
             (update valmap :additional-info db/to-pg-json)
             valmap)]
    (db/UPDATE :pwlogins pid valmap)))

(defn validate-code [code]
  (-> code get-pwlogin-by-code valid?))

(defn access-pwlogin!
  "Update and invalidate the current pwlogin, and link 
  the email address to the correct user if necessary"
  [id]
  (db/UPDATE :pwlogins id {:access-date (java.util.Date.)}))

(defn gen-random-code []
  (str (java.util.UUID/randomUUID)))

(defn generate-pwlogin
  ([email-id] (generate-pwlogin email-id "/"))
  ([email-id-or-address url & [additional-info]]
   (let [email-id (if (string? email-id-or-address)
                    (-> email-id-or-address email/get-email :id)
                    email-id-or-address)]
     (create-pwlogin {:email-id email-id :code (gen-random-code) :target-url url :additional-info additional-info }))))


(defn generate-reviewer-pwlogin
  "Generate a pwlogin for a reviewer (which may queue changes to approvals on login)"
  [email-id-or-address approval-id]
  (let [application-id (approvals/get-application-for-approval approval-id [:id])]
    (generate-pwlogin email-id-or-address
                      (str "/review/" application-id)
                      {:approval-id approval-id
                       :application-id application-id})))

(defn sync-email-to-login
  "Sync the username that logged in via CAS with the email that was followed to the pwlogin"
  [email-id username]
  (let [user-by-username-id (:id (users/get-new-or-existing-user username))
        userid-from-email (-> email-id email/get-email :user-id)]
    (when-not (= user-by-username-id userid-from-email)
      (db/UPDATE :emails email-id {:user-id user-by-username-id}))))


(defn set-one-next-approver!
  "Set the approver if it is one of the next approvers for the application"
  [application-id approval-id would-be-approver-id]
  (let [next-approvals (approvals/next-approvals-needed application-id)]
    (when (approvals/is-next-approval? application-id approval-id)
      (approvals/set-approver! approval-id would-be-approver-id))))

(defn set-approver-from-review-pwlogin
  "If it is a reviewer login, set the approver with the pwlogin's `approver-id` for app of the login to the user associated with the pwlogin email"
  [pwlogin]
  (when (review-login? pwlogin)
    (let [{:keys [approval-id application-id]} (:additional-info pwlogin)]
      (set-one-next-approver! application-id
                              approval-id
                              (:id (users/get-set-user-by-email
                                    (:email-id pwlogin)))))))

(defn do-pwlogin!
  "receive the code. If it is valid return the user, otherwise nil.
  If username exists already, associate the email address with it.
  If the pwlogin is for a review and the visitor is not the assigned reviewer, assign him to be the reviewer."
  [code username]
  (let [pwlogin (get-pwlogin-by-code code)]
    (when (valid? pwlogin)
      (access-pwlogin! (:id pwlogin))
      (sync-email-to-login (:email-id pwlogin) username)
      (set-approver-from-review-pwlogin pwlogin)
      (assoc
       (users/get-new-or-existing-user username)
       :to-url (:target-url pwlogin)))))

(defn -disable-pwlogin
  "Update a pwlogin with disabled status (though unviewed)"
  [pwlogin-id]
  (let [pw-info (db/READ :pwlogins pwlogin-id)
        disabled (assoc-in pw-info [:additional-info :disabled :date]  (java.util.Date.))]
    (db/UPDATE :pwlogins pwlogin-id disabled)))

(defn disable-pwlogin!
  "Render a pwlogin invalid"
  ([pw-id]
   (cond
     (string? pw-id) (disable-pwlogin! (:id (get-pwlogin-by-code pw-id)))
     (number? pw-id) (-disable-pwlogin pw-id))))

(defn disable-all-user-pwlogins!
  [user-id application-id]
  (doseq [pwl (get-user-pwlogins-for-application user-id application-id) :let [id (:id pwl)]]
    (disable-pwlogin! id)))


(defn generate-review-link!
  ([pwlogin]
   (str (-> env :site-url)
        "/login/"
        (:code pwlogin)))

  ([application-id email-address]
   (let [approval-id (:id (approvals/get-approval-by-approver application-id email-address))
         pwlogin (generate-reviewer-pwlogin (:id (email/get-email email-address))
                                            approval-id)]
     (generate-review-link! pwlogin))))
