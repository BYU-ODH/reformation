(ns reagent-forms.db.email
  (:require [reagent-forms.db.core :as db]
            [honeysql.core :as sql]
            [honeysql.helpers :as h]))

(def MESSAGE-TYPES {:request "REVIEW-REQUEST"
                    :receipt "NOTIFICATION"})

(def CREATE
  "Add a raw email. Prefer `create-email` function for formatting functionality."
  (partial db/CREATE :emails))

(def READ
  "Read a raw email entry"
  (partial db/READ :emails))

(def UPDATE
  "Update an email entry"
  (partial db/UPDATE :emails))

(def DELETE
  "Delete an email entry"
  (partial db/DELETE :emails))

(def create-log
  "Add an entry to the email-log"
  (partial db/CREATE :email-log))

(def read-log
  "Read from email-log"
  (partial db/READ :email-log))

(def update-log
  "Update from email-log"
  (partial db/UPDATE :email-log))

(def delete-log
  "Delete from email-log"
  (partial db/DELETE :email-log))

(defn is-email? [s]
  "Check if string `s` constitutes an email address"
  (when (string? s)
    (boolean (re-find #"@.*\." s))))

(defn create-email [valmap]
  (when-not (is-email? (:email valmap))
    (throw (ex-info "Provided email is not valid." {:input valmap})))
  (first (CREATE (clojure.core/update valmap :email clojure.string/lower-case))))

(defn get-email
  "With no params, get all emails. With id num, get that email; with string, get email matching that address."
  [&[id-or-address]]
  (let [search-key (when id-or-address
                     (if (string? id-or-address) :email :id))
        qmap (merge (-> (h/select :*)
                        (h/from :emails))
                    (when id-or-address (h/where [:= search-key id-or-address])))
        results (-> qmap sql/format db/dbr)]
    (if id-or-address (first results) results)))

(defn emails-to-address
  "Get the logs for emails that were sent to string `address` "
  [address]
  (-> {:select [:*]
       :from [:email-log]
       :where [:= address :%ANY.recipients]}
      sql/format
      db/dbr))

(defn emails-from-address
  "Get the logs for emails that were sent from string `address` "
  [address]
  (-> {:select [:*]
       :from [:email-log]
       :where [:= :sender address]}
      sql/format
      db/dbr))

(defn email-addresses-for-user
  "Return the email entries for `user-id`"
  [user-id]
  (-> {:select [:*]
       :from [:emails]
       :where [:= :user-id user-id]}
      sql/format
      db/dbr))

(defn mail-for-user 
  [user-id application-id type-s]
  (let [email-addresses (map :email (email-addresses-for-user user-id))]
    (println "Application id we are seeking is:" (pr-str [application-id email-addresses]))
    (-> {:select [:*]
         :from [:email-log]
         :where [:and
                 (db/pg-intersect-arrays :recipients email-addresses)
                 [:= (db/pg->> :info :application_id) (str application-id)]
                 [:= (db/pg->> :info :type) type-s]]}
        sql/format
        db/dbr)))

(defn mail-requests-for-user 
  "retrieve all mail approval requests notifications for `user` and application `application-id` "
  [user-id application-id]
  (mail-for-user user-id application-id (MESSAGE-TYPES :request)))

(defn mail-receipt-notifications-for-user 
  "retrieve all mail notifications for `user` and application `application-id` "
  [user-id application-id]
  (mail-for-user user-id application-id (MESSAGE-TYPES :receipt)))
