(ns reagent-forms.routes.home
  (:require [reagent-forms.layout :as layout]
            [compojure.core :refer [defroutes context GET POST ]]
            [ring.util.http-response :as response]
            [ring.util.io :refer [piped-input-stream]]
            [ring.util.response :as r]
            [clojure.java.io :as io]
            [reagent-forms.db.core :as db]
            [reagent-forms.application :as application]            
            [reagent-forms.db.users :as users]
            [reagent-forms.mail :as mail]
            [reagent-forms.db.pwlogins :as pwlogins]
            [reagent-forms.db.approvals :as approvals]))

(defn home-page [req]
  (let [username (:username req)
        userinfo (-> (get-in req [:session :user-data])
                     (assoc :username username)
                     (assoc :reagent-forms-user-id (users/get-user-id username)))]
    (layout/hiccup-render-cljs-base userinfo)))

(defn register-and-notify
  "Register a submission application and send email notifications as appropriate, returning the receipt page."
  [submission]
  (let [logic-id (:id (approvals/get-default-logic))
        application (application/register-submission submission logic-id)
        mentor-email (get-in submission [:faculty-mentor :email])]
    (mail/receipt-of-submission application)
    (mail/approval-request application)
    {:application application
     :page (layout/receipt-page application)}))

(defn code-login
  "Login with a pwlogin code, redirecting according to the code"
  [code username]
  (if-let [user (pwlogins/do-pwlogin! code username)]
    (do
      (r/redirect
       (or (:to-url user)
           "/")))
    (layout/error-page {:status 403
                        :title "Invalid Login"
                        :message [:div
                                  [:p.message "Your login code is no longer valid."]
                                  [:p.login-code (str "Code: " code)]]})))


(defn edit-application
  "Post edits to an existing application"
  [user-id application-id submission]
  (if (application/edit-application user-id application-id submission)
    (response/ok "Application edits successful")
    (response/forbidden "Unauthorized Application Update")))


(defroutes home-routes
  (GET "/" req (home-page req))
  (GET "/user" req (home-page req))
  (GET "/status" req (home-page req))
  (GET "/applicant" req (home-page req))
  (GET "/reviews" req (home-page req)) ;;;TODO: SECURE THIS
  (GET "/review/:application" req (home-page req)) ;;;TODO: SECURE THIS
  (GET "/about" req (home-page req))
  (GET "/contact" req (home-page req))
  ;; (GET "/application/edit/:application-id" [application-id :as req]
  ;;      (home-page req))
  (POST "/submit" [submission]
        (:page (register-and-notify submission))

        ;; (do 
        ;;   (println "Submission is:")
        ;;   (println "NONE OF YOUR BUSINESS")
            
        ;;                                 ;(prn submission)
        ;;     ;; (let [registration (register-and-notify submission)]
        ;;     ;;   ;; (println ">>> registration is:")
        ;;     ;;   ;; (prn registration)
        ;;     ;;   (:page registration))
        ;;     )
        )
  (POST "/test" [] (do
                     (println "Got  your test!")
                     (response/ok "Got  your test!")))
  ;; (POST "/update" [user-id submission application-id] (edit-application user-id application-id submission))
  (GET "/login/:code" [code :as req]
       (let [username (get-in req [:session :user-data :username])]
         (code-login code username))))
