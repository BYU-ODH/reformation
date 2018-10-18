(ns reagent-forms.comments
  "Smart comment-related functions, including auth and filtering functionality, returning values for front-end use"
  (:require [reagent-forms.db.comments :as cdb]
            [reagent-forms.auth :as auth]
            [reagent-forms.data :as data]
            [reagent-forms.db.users :as users]
            [reagent-forms.db.applications :refer [is-applicant?]]
            [reagent-forms.db.approvals :as approvals]))

(defn -get-comments-for-reviewer
  "Get all the comments visible to given reviewer"
  [application-id user-id]
 (cdb/get-application-comments application-id))

(defn -get-comments-for-applicant
  "Get all comments for applicant `user-id` if user is applicant of `application-id`"
  [application-id user-id]
  (cdb/get-application-comments-for-applicant application-id))

(defn get-comments
  "Get the appropriate list of comments for `application-id` and `user-id`, depending upon user's viewing privileges"
  [application-id user-id]
  (if (auth/is-applicant? application-id user-id)
    (-get-comments-for-applicant application-id user-id)
    (-get-comments-for-reviewer application-id user-id)))

(defn get-application-comments-with-userdata
  "Get the comments for `application-id` with the user-data of the author attached. With optional `requester-id`, get only the comments that should be visible to that user."
  ([application-id requester-id]
   (get-application-comments-with-userdata (get-comments application-id requester-id)))
  ([comments]
   (for [c comments]
     ;; TODO this is very is expensive for web-service user-info
     (update c :author #(select-keys (data/get-user-info (users/get-user-name %)) [:preferred-name :net-id :work-email])))))

(defn comment-author?
  [comment-id user-id]
  (= user-id (cdb/READ comment-id [:author])))

(defn create-comment
  "Create a comment, configuring properly based on author"
  [{:keys [author-id application-id comment-text reply-to-cid visible-to-applicant]
    :or {visible-to-applicant (is-applicant? application-id author-id)}}]
  (cdb/create-comment {:author author-id
                       :application application-id
                       :comment comment-text
                       :visible-to-applicant visible-to-applicant
                       :reply-to reply-to-cid})
  (get-application-comments-with-userdata application-id author-id))

(defn create-hold-comment
  "Create the comment to accompany a \"HOLD\" decision"
  [{:keys [user-id approval-id comment]}]
  (let [application-id (approvals/get-application-id-for-approval approval-id)]
    (cdb/create-comment {:author user-id
                         :application application-id
                         :comment comment
                         :visible-to-applicant true
                         :info {:HOLD true}})))


(defn delete-comment
  "Delete comment if user is authorized"
  [{:keys [application-id comment-id user-id]
    :as cmap}]
  (when (comment-author? comment-id user-id)
    (cdb/DELETE comment-id))
  (get-application-comments-with-userdata application-id user-id))

(defn update-comment
  "Update comment if user is authorized"
  [{:keys [application-id id user-id comment]
    :as cmap}]
  (println "In update-comment with")
  (prn cmap)
  (println "Is commment author?" (comment-author? id user-id))

  (when (comment-author? id user-id)
    (cdb/UPDATE id {:id id :comment comment}))
  (get-application-comments-with-userdata application-id user-id)) 
