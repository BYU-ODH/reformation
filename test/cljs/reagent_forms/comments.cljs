(ns reagent-forms.comments
  "Comment-boxes and comment lists"
  (:require [reagent.core :as r]
            [reagent.session :as session]
            [reagent-forms.shared-test :as shared]
            [reagent-forms.shared.components.input :as input]
            [reagent-forms.shared.components.lightbox :as lb]
            [reagent-forms.reviews :refer [APPLICATIONS] :as reviews]
            [reagent-forms.shared.auth :as auth]
            [clojure.string :as str]
            [ajax.core :refer [GET POST PATCH DELETE]]))

(defonce COMMENTS (r/atom {:setting {:public true}
                           :new {:everyone nil
                                 :reviewers nil}}))

(defn comment-type
  "Determine whether a comment is public, for reviewers only, or a request for revisions"
  [comment]
  (cond
    (get-in comment [:info :hold]) :hold
    (:visible_to_applicant comment) :public
    :default :reviewer))


(defn comment-badge
  "The corner badge indicating the type of comment it is"
  [comment-or-kw]
  (let [icons {:public [:i.fa.fa-globe ""]
               :reviewer [:i.fa.fa-lock ""]
               :hold [:i.fa.fa-warning ""]}
        ct (if (keyword? comment-or-kw)
             comment-or-kw
             (comment-type comment-or-kw))]
    [:div.badge {:class ct}
     (ct icons)]))


(defn update-comments-from-response
  "Update COMMENTS from an http response to the comment routes"
  [r]
  (swap! COMMENTS assoc :comments r :new nil))


(def reply-default {:reply-to-id nil
                    :text nil
                    :reply-to-text nil})

(defonce REPLY (r/atom reply-default))

(defn reset-reply []
  (reset! REPLY reply-default))

(defn have-reply?
  "Has a reply been begun?"
  []
  (not= @REPLY reply-default))

(defn update-reply
  [e]
  (swap! REPLY assoc :text (-> e .-target .-value)))

(defn _submit-reply
  [{:keys [application-id user-id reply-text reply-to]}]
  (let [method POST
        url "/admin/application/comment/reply"
        pmap {:handler update-comments-from-response
              :error-handler #(js/alert "There has been an error with your action. Please contact the admin.")
              :params {:application-id application-id
                       :user-id user-id
                       :comment reply-text
                       :reply-to reply-to}}]
    (reset-reply)
    (method url pmap)))

(defn submit-reply
  [_]
  (_submit-reply {:application-id (session/get :application)
                  :user-id (auth/get-user-id)
                  :reply-text (:text @REPLY)
                  :reply-to (:reply-to-id @REPLY)}))

;;;;;;;;;;;;;;;;;;;;;;
;; UPDATE functions ;;
;;;;;;;;;;;;;;;;;;;;;;
(def update-default {:comment-id nil
                     :text nil
                     :text-to-update nil})

(defonce UPDATE (r/atom update-default))

(defn reset-update []
  (reset! UPDATE update-default))

(defn have-update?
  "Has a update been begun?"
  []
  (not= @UPDATE update-default))

(defn update-update
  [e]
  (swap! UPDATE assoc :text (shared/get-value-from-change e)))

(defn _submit-update
  [{:keys [application-id user-id update-text comment-id]}]
  (let [method PATCH
        url "/admin/application/comment"
        pmap {:handler update-comments-from-response
              :error-handler #(js/alert "There has been an error with your action. Please contact the admin.")
              :params {:application-id application-id
                       :user-id user-id
                       :comment update-text
                       :comment-id comment-id}}]
    (reset-update)
    (method url pmap)))

(defn submit-update
  [_]
  (_submit-update {:application-id (session/get :application)
                   :user-id (auth/get-user-id)
                   :update-text (:text @UPDATE)
                   :comment-id (:comment-id @UPDATE)}))


(defn new-comment-public?
  []
  (let [setting-loc [:setting :public] ]
    (get-in @COMMENTS setting-loc)))

(defn get-comment-text
  "Get the comment text for the selected comment-type"
  []
  (let [recipient (if (new-comment-public?) :everyone :reviewers)
        path-to-new [:new recipient]]
    (get-in @COMMENTS path-to-new)))

(defn _get-comments
  "Request from the server all comments belonging to this application"
  [app-id]
  (let [method GET
        url "/admin/application/comments"
        pmap {:handler update-comments-from-response
              :error-handler (fn [e]
                               (.log js/console "-------ERROR getting application!")
                               (.log js/console e))
              :params {:user-id (auth/get-user-id)
                       :application-id app-id}}]
    (method url pmap)))

(defn _nest-replies-for-comment
  "Search `comments` for all `:reply-to` the `comment-id`"
  [comment comments]
  (let [replies (filter #(= (:id comment) (:reply_to %)) comments)]
    (assoc comment :replies
           (for [r replies] (_nest-replies-for-comment r comments)))))

(defn nest-replies
  "Nest replies under their parents"
  [comments]
  (->> (for [comment comments] (_nest-replies-for-comment comment comments))
       (filter #(not (:reply_to %)))))

(defn comment-list
  "Get the comments that have been received so far"
  []
  (when (some? (:comments @COMMENTS))
    (->> (:comments @COMMENTS)
         (sort-by :date #(> %1 %2))
         nest-replies)))


(defn get-comments [app-id &[force?]]
  (when (or force?
            (nil? (comment-list))) (_get-comments app-id))
  @COMMENTS)

(defn _submit-comment
  "Gather the current user info and approval number and submit approval"
  [{:keys [user-id application-id comment-text visible-to-applicant]}]
  (let [method POST
        url "/admin/application/comment"
        confirm-message (if visible-to-applicant
                          "Your message would be visible to the applicant, as well as all reviewers. Confirm?"
                          "Your message would not be visible to the applicant, but readable by all reviewers. Confirm?")
        pmap {:handler (fn [r]
                         (swap! COMMENTS assoc :comments r :new nil))
              :error-handler #(js/alert "There has been an error with your action. Please contact the admin.")
              :params {:application-id application-id
                       :user-id user-id
                       :comment comment-text
                       :visible-to-applicant visible-to-applicant}}]
    (when (js/confirm confirm-message)
      (method url pmap))))

(defn submit-comment []
  (_submit-comment {:user-id (auth/get-user-id)
                    :application-id (session/get :application)
                    :comment-text (get-comment-text)
                    :visible-to-applicant (new-comment-public?)}))

(defn comment-actions
  "The submit and other controls for the comments"
  []
  (let [submit-id "submit-comment"]
      [:div.comment-actions
       [:a.btn.btn-warning {:id submit-id
                            :class (when (empty? (get-comment-text)) "disabled")
                            :on-click submit-comment
                            :data-toggle "tooltip"
                            :data-placement "right"
                            :title "Submit Comment"} [:i.fa.fa-comment]]]))

(defn new-comment-box
  "The new comment box, allowing selection of recipient"
  [& [is-applicant?]]
  (let [recipient (if (new-comment-public?) :everyone :reviewers)
        setting-loc [:setting :public]
        path-to-new [:new recipient]
        make-public (fn [val] (swap! COMMENTS assoc-in setting-loc val))
        update-comment  (fn [e] (swap! COMMENTS assoc-in path-to-new (shared/get-value-from-change e)))]
    [:div.new-comment
     [:div.comment-type
      [:a.tab
       {:on-click #(make-public true)
        :class (when (new-comment-public?) "selected")}
       "Public Comment" (comment-badge :public)]
      (when (not is-applicant?)
        [:a.tab
         {:on-click #(make-public false)
          :class (when-not (new-comment-public?) "selected")} "Reviewer Comment" (comment-badge :reviewer)])]
     [:div.comment-text
      [:textarea#new-comment {:value (get-comment-text)
                              :placeholder (str "New Comment to " (name recipient))
                              :on-change update-comment}]]
     [comment-actions]]))

(defn start-reply
  "Triggers dreagent-formslay of the reply box for a comment"
  [comment-id comment-text]
  (swap! REPLY assoc
         :replying true
         :reply-to-text comment-text
         :reply-to-id comment-id))

(defn _delete-comment
  [comment-id]
  (let [url "/admin/application/comment"
        cmap {:handler (fn [r] (swap! COMMENTS assoc :comments r))
              :error-handler #(println "there's been an error in deletion")
              :params {:comment-id comment-id
                       :application-id (session/get :application)
                       :user-id (auth/get-user-id)}}] 
    (DELETE url cmap)))

(defn delete-comment
  [comment-id]
  (when (js/confirm "Are you sure you want to delete this comment?")
    (_delete-comment comment-id)))

(defn start-edit
  "Dreagent-formslay the reply box for a comment by making the UPDATE atom non-default"
  [comment-id comment-text]
  (swap! UPDATE assoc
         :UPDATING true
         :comment-id comment-id
         :text-to-update comment-text))

(defn one-comment-dreagent-formslay
  "Dreagent-formslay a comment"
  [comment]
  (let [self-author? (= (-> comment :author :id) (auth/get-user-id))
        public? (:visible_to_applicant comment)
        comment-text (:comment comment)
        replies (:replies comment)]
    [:div.comment
     {:class (comment-type comment)}
     [:div.author 
      [:i.fa.fa-user]
      [:a {:href (str "mailto:" (auth/get-email (:author comment)))}
       (str
        (get-in comment [:author :preferred-name]))]]
     [:div.date (shared/format-date (:date comment))]
     [comment-badge comment]
     [:div.text
      [:i.fa.fa-quote-left]
      comment-text]
     [:div.controls
      [:a.reply
       [:i.fa.fa-reply]
       [:span.text {:on-click #(start-reply (:id comment) comment-text)}
        "Reply"]]
      [:a.edit
       [:i.fa.fa-pencil]
       [:span.text
        {:on-click #(start-edit (:id comment) comment-text)}
        "Edit"]]
      [:a.delete
       [:i.fa.fa-trash]
       [:span.text
        {:on-click #(delete-comment (:id comment))}
        "Delete"]]]
     (when (some? replies)
       (into [:div.replies] (map one-comment-dreagent-formslay replies)))]))

(defn previous-comments []
  (into [:div.previous-comments]
        (for [c (comment-list)]
          [one-comment-dreagent-formslay c])))

(defn plant-comment-reply
  "The comment reply box, if reply has been begun"
  []
  (if (have-reply?)
    (lb/lightbox
     [:div.new-reply
      [:h2 "Reply"]
      [:div.reply-to-text
       [:i.fa.fa-quote-left]
       (:reply-to-text @REPLY)]
      [:textarea
       {:tab-index 1
        :on-change update-reply
        :auto-focus true
        :place-holder "Response..."
        :value (:text @REPLY)}]
      [:div.controls
       [:a.btn.btn-success.submit-reply {:on-click submit-reply} "Submit"]
       [:a.btn.btn-danger.cancel-reply {:on-click reset-reply} "Cancel"]]])
    (lb/clear-lightbox)))

(defn plant-comment-edit
  "The comment edit box, if an update has been begun"
  []
  (if (have-update?)
    (lb/lightbox
     [:div.edit-comment
      [:h1 "Edit Comment"]
      [:textarea#edit-comment {:on-change update-update
                               :value (or (:text @UPDATE)
                                          (:text-to-update @UPDATE))}]
      [:div.controls 
       [:a.btn.btn-success
        {:class (when (empty? (:text @UPDATE)) "disabled")
         :on-click submit-update}
        "Submit"]
       [:a.btn.btn-danger
        {:on-click reset-update}
        "Cancel"]]])
    (lb/clear-lightbox)))

(defn render-comments [application-id application-title & [is-applicant?]]
  (when application-id (get-comments application-id))
  [:div.comments.text-center
   [:h1 (str "Comments on \"" application-title "\"")]
   [new-comment-box is-applicant?]
   [previous-comments]
   [plant-comment-edit]
   [plant-comment-reply]])

