(ns reagent-forms.db.applications
  "Helpers for application-specific data operations"
  (:require [reagent-forms.db.core :refer [to-pg-json dbc! dbr] :as db]
            [reagent-forms.db.users :as users]))

(def CREATE (partial db/CREATE :applications))
(def READ (partial db/READ :applications))
(def UPDATE (partial db/UPDATE :applications))
(def DELETE (partial db/DELETE :applications))

(defn get-program-title [application]
  (-> application :form :title))

(defn get-application
  ([&[any]] (db/READ :applications any)))


(defn create-application-from-submission
  "The submission is the :form of a database entry"
  ([submission]
   (let [username (get-in submission [:user :username])
         user-id (:id (users/get-new-or-existing-user username))]
     (if (empty? username)
       (throw (Exception. (str "Unable to find username in connection with " submission)))
       (create-application-from-submission user-id submission))))

  ([user-id submission]
   (let [application {:applicant user-id
                      :form (to-pg-json submission)}]
     (first (dbc! :applications application)))))

(defn get-applicant-id
  "Get the id for the applicant of `application-id`"
  [application-id]
  (READ application-id [:applicant]))

(defn is-applicant?
  "Is `user-id` the applicant for `application-id`?"
  [application-id user-id]
  (= user-id (get-applicant-id application-id)))
