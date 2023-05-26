(ns reformation.core-front
  (:require [reagent.dom :as rd]
            [reagent.session :as session]
            [reformation.ajax :refer [load-interceptors!]]
            [reformation.routes :as routes]            
            [accountant.core :as accountant]))


(defn page []
  [(pages (session/get :page))])

;; -------------------------
;; Initialize app

(defn mount-components []
  (rd/render [page] (.getElementById js/document "app")))

(defn init! []
  (load-interceptors!)
  (routes/init-routes!)
  (mount-components))
