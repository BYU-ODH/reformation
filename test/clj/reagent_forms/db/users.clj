(ns reagent-forms.db.users
  (:require
   [reagent-forms.config :refer [env]]
   [reagent-forms.db.core :refer [dbr dbc! dbu! dbd! dbdo!]:as db]
   [reagent-forms.data :as data]
   [reagent-forms.db.email :as email]
   [honeysql.core :as sql]
   [honeysql.helpers :as h]))

(def CREATE (partial db/CREATE :users))
(def READ (partial db/READ :users))
(def UPDATE (partial db/UPDATE :users))
(def DELETE (partial db/DELETE :users))

(defn delete-applications-for-user [id]
  (dbd! :applications ["applicant = ?" id]))

(defn get-user-pinfo [user-id]
  (-> (h/select :*)
      (h/from :personal-info)
      (h/where [:= :user user-id])
      sql/format
      dbr
      first))

(defn delete-pinfo-for-user [user-id]
  (dbd! :personal-info ["user-id = ?" user-id]))

(defn sanitize-usermap [umap]
  (let [valid-keys [:id :username :creation-date]]
    (select-keys umap valid-keys)))

(defn get-emails-for-user
  "Get each full email entry for user `uid`"
  [uid & [select-keys]]
  (-> {:select (or select-keys [:*])
       :from [:emails]
       :where [:= :user-id uid]
       :order-by [:creation-date]}
      sql/format
      db/dbr))

(defn get-email-addresses-for-user
  "Return each of the email addresses (strings) for a given user"
  [uid]
  (get-emails-for-user uid [:email]))

(defn delete-email-addresses-for-user [uid]
  (-> {:delete-from :emails
       :where [:= :user-id uid]}
      sql/format
      dbdo!))

(defn create-or-assign-email-for-user [eid uid] ;; TODO create an email namespace for necessary logic
  (if-let [email-id (:id (email/get-email eid))]
    (db/UPDATE :emails email-id {:user-id uid})
    (db/CREATE :emails {:user-id uid :email eid})))

(defn get-user-by-email
  "Get the user by `email-identifier`, either an email id or email address string"
  [email-identifier]
  (when-let [e (email/get-email email-identifier)]
    (->> e :user-id (db/READ :users))))
;(get-user-by-email "webdev@toryanderson.com")

(defn get-user-by-username [username]
  (-> {:select [:*]
       :from [:users]
       :where [:= :username username]}
      sql/format
      db/dbr
      first))

(defn create-new-user!
  "Create a user and initialize personal info"
  [umap]
  (let [user (db/CREATE :users (sanitize-usermap umap))
        user-id (:id user)
        email (when-let [email (:email umap)]
                (email/create-email {:email email
                                     :user-id user-id}))
        pi (db/CREATE :personal-info {:user-id user-id})]
    (merge user {:personal-info pi
                 :emails (get-email-addresses-for-user user-id)})))

(defn update-user! [user-id umap]
  (db/UPDATE :users user-id umap))

(defn get-user
  "Get the user and his personal info, by username, email, or id"
  [user-id]
  (let [user (cond
               (email/is-email? user-id) (get-user-by-email user-id)
               (number? user-id) (db/READ :users user-id)
               (string? user-id) (get-user-by-username user-id)
               :default (throw (ex-info "Invalid user-id supplied to get-user"
                                        {:user-id user-id})))
        pinfo (db/READ :personal-info (:id user))]
    (when user
      (merge user {:personal-info (:info pinfo)}))))

(defn get-user-with-email [user-id]
  (assoc (get-user user-id) :emails (get-email-addresses-for-user user-id)))

;; => (def user-id {:username "torysa", :email "tory-anderson@byu.edu"})
(defn get-new-or-existing-user
  "Get user identified by `user-identifier`. If it's a never-before-seen email,
  create a new user with that email address."
  [user-identifier]
  (if-let [user (get-user user-identifier)]
    user
    (cond
      (email/is-email? user-identifier)
      (create-new-user! {:username user-identifier
                         :email user-identifier})

      (string? user-identifier)
      (create-new-user! {:username user-identifier})

      (map? user-identifier)
      (create-new-user! (select-keys [:email :username] user-identifier)))))
; (create-new-user! user-id)
(defn UNIDENTIFIED-ID
  "Get the ID of the `UNIDENTIFIED` user, creating it first if necessary"
  []
  (:id (get-new-or-existing-user "UNIDENTIFIED")))

(defn get-set-user-by-email
  "Given an email address, attach it to UNIDENTIFIED if new.
  Then return whoever it is attached to. "
  [email-address]
  (or (get-user-by-email email-address)
      (do
        (create-or-assign-email-for-user email-address (UNIDENTIFIED-ID))
        (get-user-by-email email-address))))

(defn delete-user! [user-id]
  (db/DELETE :users user-id))

(defn get-pinfo-for-user [uid]
  (-> {:select [:*]
       :from [:personal-info]
       :where [:= :user-id uid]}
      sql/format
      dbr
      first))

(defn set-pinfo-for-user
  "Takes care of the json conversion of the infomap"
  [user-id info]
  (let [pinfo-id (:id (get-pinfo-for-user user-id))]
    (db/UPDATE :personal-info pinfo-id {:info (db/to-pg-json info)})))

(defn update-pinfo-for-user
  "Merge old and new jsons"
  [user-id new-info]
  (let [{:keys [id info]} (get-pinfo-for-user user-id)]
    (db/UPDATE :personal-info id {:info
                                  (merge info new-info)})))

(defn delete-pinfo-for-user [uid]
  (set-pinfo-for-user uid nil))

(defn get-user-name-from-email [email] ; ;TODO: Implement usernames
  (let [user (get-new-or-existing-user email)]
    (:email user)))

(defn -get-user-name [user-map]
  (or
   (-> user-map :personal-info :name)
   (:username user-map)))

(defn get-user-name [user-id]
  (cond
    (number? user-id) (-get-user-name (db/READ :users user-id))
    (map? user-id) (-get-user-name user-id)))
                                        
(defn get-user-id [identifier]
  (:id (get-new-or-existing-user identifier)))

(defn get-user-byu-data [id]
  (data/get-user-info (get-user-name id)))

(defn get-applications-for-user [uid]
  (-> {:select [:*]
       :from [:applications]
       :where [:= :applicant (get-user-id uid)]}
      sql/format
      dbr))

