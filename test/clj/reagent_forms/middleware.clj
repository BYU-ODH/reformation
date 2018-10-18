(ns reagent-forms.middleware
  (:require [reagent-forms.env :refer [defaults]]
            [byu-cas.core :refer [wrap-remove-cas-code wrap-cas] :as cas]
            [byu-ws.oauth2 :as oauth]
            [clojure.tools.logging :as log]
            [reagent-forms.layout :refer [*app-context* error-page]]
            [reagent-forms.db.approvals :refer [has-approvals?]]
            [reagent-forms.data :as d]
            [ring.middleware.anti-forgery :refer [wrap-anti-forgery]]
            [ring.middleware.webjars :refer [wrap-webjars]]
            [ring.middleware.format :refer [wrap-restful-format]]
            [ring.middleware.session.cookie :refer [cookie-store]]
            [reagent-forms.config :refer [env]]
            [ring.middleware.flash :refer [wrap-flash]]
            [immutant.web.middleware :refer [wrap-session]]
            [ring.middleware.defaults :refer [site-defaults wrap-defaults]]
            [buddy.auth.middleware :refer [wrap-authentication]]
            [buddy.auth.accessrules :refer [wrap-access-rules restrict]]
            [buddy.auth.backends.session :refer [session-backend]]
            [buddy.auth :refer [authenticated?]])
  (:import [javax.servlet ServletContext]))

(defn print-handler [handler & [s]]
  (fn [req]
    (println (or s "---Request is:"))
    (prn req)
    (handler req)))

(defn wrap-user-data [handler]
  (fn [request]
    (let [user-data-path [:session :user-data]
          netid (:username request)          ]
      (if netid
        (let [studied-request (-> (assoc-in request user-data-path (d/get-user-info netid))
                                  (assoc-in (conj user-data-path :username) netid)
                                  (assoc-in (conj user-data-path :has-approvals?) (has-approvals? netid)))]
          (handler studied-request))
        (handler
         (assoc-in request user-data-path {:error "No netid provided"}))))))

(defn wrap-cas-to-request-url [handler]
  (fn [request]
    ((wrap-cas handler (str (-> env :site-url)
                            (-> request :path-info))) request)))


(defn wrap-client-auth [handler]
  (let []
    (-> handler
        wrap-user-data
        wrap-cas-to-request-url)))

(defn wrap-context [handler]
  (fn [request]
    (binding [*app-context*
              (if-let [context (:servlet-context request)]
                (try (.getContextPath ^ServletContext context)
                     (catch IllegalArgumentException _ context))
                (:app-context env))]
      (handler request))))

(defn wrap-internal-error [handler]
  (fn [req]
    (try
      (handler req)
      (catch Throwable t
        (log/error t)
        (error-page {:status 500
                     :title "Error"
                     :message "Please report your error to the admin."})))))

(defn wrap-csrf [handler]
  (wrap-anti-forgery
   handler
   {:error-response
    (error-page
     {:status 403
      :title "Invalid anti-forgery token"})}))

(defn wrap-formats [handler]
  (let [wrapped (wrap-restful-format
                 handler
                 {:formats [:json-kw :transit-json :transit-msgpack :edn]})]
    (fn [request]
      ((if (:websocket? request) handler wrapped) request))))

(defn wrap-base [handler]
  (-> handler
      wrap-webjars
      (wrap-defaults
       (-> site-defaults
           (assoc-in [:security :anti-forgery] false)))
      wrap-flash
      wrap-session
      wrap-context
      wrap-internal-error))
