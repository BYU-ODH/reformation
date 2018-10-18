(ns reagent-forms.db.admins
  (:require
   [reagent-forms.config :refer [env]]
   [reagent-forms.db.core :refer [dbr dbc! dbu! dbd! dbdo!]:as db]
   [reagent-forms.approval-common :refer [ADMIN-USERS]]
   [reagent-forms.db.approvals :as approvals]
   [reagent-forms.db.users :as users]
   [honeysql.core :as sql]))

(def CREATE (partial db/CREATE :system-roles))
(def READ  (partial db/READ :system-roles))
(def UPDATE (partial db/UPDATE :system-roles))
(def DELETE (partial db/DELETE :system-roles))

(defn clear-admins!
  ([]
   (dbdo! "DELETE FROM system-roles"))
  ([logic-id]
   (-> {:delete-from :system-roles
        :where [:= :approval-logic logic-id]}
       sql/format dbdo!)))


(defn initialize-admins!
  "Set each user in `admin-names` to be an admin for all applications part of logic-id"
  ([] (initialize-admins! ADMIN-USERS (:id (approvals/get-default-logic))))
  ([admin-names logic-id]
   (clear-admins! logic-id)
   (doseq [u admin-names]
     (let [user-id (:id (users/get-new-or-existing-user u))]
       (dbc! :system-roles {:uid user-id :role-name "ADMIN" :approval-logic logic-id} )))))

(defn all-admins
  ([] (db/READ :system-roles))
  ([logic-id] (-> {:select [:*]
                   :from [:system-roles]
                   :where [:= :approval-logic logic-id]} sql/format db/dbr)))

(defn is-admin?
  ([admin-id]
   (let [logic-id (:id (approvals/get-default-logic))]
     (is-admin? admin-id logic-id)))
  ([admin-id logic-id]
   (-> {:select [:id]
        :from [:system-roles]
        :where [:and
                [:= :uid admin-id]
                [:= :approval-logic logic-id]]}
       sql/format dbr first boolean)))


(defn all-admin-applications
  "Get all approvals visible to admin"
  ([admin-id] (all-admin-applications admin-id (:id (approvals/get-default-logic))))
  ([admin-id logic-id]
   (when (is-admin? admin-id logic-id) 
     (approvals/get-applications-for-approval-logic logic-id))))
