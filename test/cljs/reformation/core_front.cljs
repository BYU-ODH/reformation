(ns reformation.core-front
  (:require [reagent.dom :as rd]
            [reagent.session :as session]
            [reformation.ajax :refer [load-interceptors!]]
            [reformation.routes :as routes]            
            [accountant.core :as accountant]))


;; (defn page []
;;   [(pages (session/get :page))]) ;; TODO nothing to display yet

;; -------------------------
;; Initialize app

(defn not-page
  "Filler content during dev"
  []
  [:div.content 
   [:h1 "REFORMATION FILLER"]]
  )

(defn mount-components []
  (rd/render [not-page] (.getElementById js/document "app")))

(defn init! []
  (load-interceptors!)
  (routes/init-routes!)
  (mount-components))

(comment
  (session/state))
