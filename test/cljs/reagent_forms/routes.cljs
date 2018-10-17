(ns reagent-forms.routes
  (:require [reagent.core :as r]
            [reagent.session :as session]
            [secretary.core :as secretary :include-macros true]
            [accountant.core :as accountant]))

;; -------------------------
;; Routes
;(secretary/set-config! :prefix "#")

(secretary/defroute home "/" []
  (session/put! :page :home))

(secretary/defroute applicant-route "/applicant" []
  (session/put! :page :app))

;; (secretary/defroute status-route "/status" []
;;   (session/put! :page :status))

(secretary/defroute reviews-dashboard-route "/reviews" []
  (session/put! :page :reviews-dashboard))

(secretary/defroute review-route "/review/:application" [application]
  (session/put! :application (js/parseInt application))
  (session/put! :page :review))

(secretary/defroute edit-route "/application/edit/:application" [application]
  (session/put! :application (js/parseInt application))
  (session/put! :page :update))

(secretary/defroute about-route "/about" []
  (session/put! :page :about))

(secretary/defroute contact-route "/contact" []
  (session/put! :page :contact))

;; -------------------------
;; History
;; must be called after routes have been defined

(accountant/configure-navigation! {:nav-handler (fn [path] (secretary/dispatch! path))
                                   :path-exists? (fn [path] (secretary/locate-route path))})

(accountant/dispatch-current!)
