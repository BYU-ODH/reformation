(ns reformation.routes
  (:require [reagent.core :as r]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [reformation.application :as app]
            [reformation.review-front :as review]
            [reagent.session :as session]))

;;;;;;;;;;;;;;;;;;;
;; Reitit routes ;;
;;;;;;;;;;;;;;;;;;;
(def routes
  (rf/router
   ["/"
    [""
     {:name ::home
      :view app/app-page}]
    ["review"
     {:name ::review
      :view review/app-page}]]))

(defn init-routes!
  "Start the front-end routing service"
  []
  (rfe/start!
   routes
   (fn [new-match]
     (session/put! :page new-match))
   {:use-fragment false}))

;; -------------------------
;;Secretary and Accountant Routes
;(secretary/set-config! :prefix "#")

;; (secretary/defroute home "/" []
;;   (session/put! :page :home))

;; (secretary/defroute applicant-route "/applicant" []
;;   (session/put! :page :app))

;; (secretary/defroute review-route "/review" []
;;   (session/put! :page :review))

;; (secretary/defroute edit-route "/application/edit/:application" [application]
;;   (session/put! :application (js/parseInt application))
;;   (session/put! :page :update))

;; ;; -------------------------
;; ;; History
;; ;; must be called after routes have been defined

;; (accountant/configure-navigation! {:nav-handler (fn [path] (secretary/dispatch! path))
;;                                    :path-exists? (fn [path] (secretary/locate-route path))})

;; (accountant/dispatch-current!)
