(ns reformation.core-front
  (:require [reagent.dom :as rd]
            [reagent.session :as session]
            [reformation.ajax :refer [load-interceptors!]]
            [reformation.routes :as routes]
            [reformation.application :as app]
            [accountant.core :as accountant]
            [reformation.review-front :as review]))


(def pages
  {:home app/app-page
   :review review/app-page
   :app app/app-page})

(defn page []
  [(pages (session/get :page))])

;; -------------------------
;; Initialize app

(defn mount-components []
  (rd/render [page] (.getElementById js/document "app")))

(defn init! []
  (load-interceptors!)  
  (accountant/dispatch-current!)
  (mount-components))
