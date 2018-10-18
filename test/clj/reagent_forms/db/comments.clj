(ns reagent-forms.db.comments
  "Core comment CRUD functionality"
  (:require [reagent-forms.db.core :as db]
            [reagent-forms.db.users :as users]
            [reagent-forms.db.applications :as applications]
            [honeysql.core :as sql]))

(def CREATE (partial db/CREATE :application-comments))

(def READ (partial db/READ :application-comments))

(def UPDATE (partial db/UPDATE :application-comments))

(def DELETE (partial db/DELETE :application-comments))

(defn create-comment
  "Create a comment for an application"
  [cmap]
  (CREATE cmap))

(defn get-application-comments-for-applicant
  "Get the comments on `application-id` that are visible to the applicant"
  [application-id]
  (let [applicant-id (applications/get-applicant-id application-id)]
    (-> {:select [:comments.* :applications.applicant]
         :from [[:application-comments :comments]]
         :join [:applications
                [:= :applications.id :comments.application]]
         :where [:and
                 [:= :applications.id application-id]
                 [:= :applications.applicant applicant-id]
                 [:= :comments.visible-to-applicant true]]}
        sql/format db/dbr)))

(defn get-application-comments [application-id & [requester-id]]
  (let [requester-is-author? (when requester-id
                               (applications/is-applicant? application-id requester-id))
        base-where [:= :application application-id]
        where-clause (if requester-is-author?
                       [:and base-where [:= :visible-to-applicant true]]
                       base-where)]
    (-> {:select [:*]
         :from  [:application-comments]
         :where where-clause}
        sql/format
        db/dbr)))
