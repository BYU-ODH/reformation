(ns reformation.core-front
  (:require [reagent.dom :as rd]
            [reagent.session :as session]
            [reformation.ajax :refer [load-interceptors!]]
            [reformation.routes :as routes]            
            [accountant.core :as accountant]))


(defn page []
  (let [session-page (session/get :page)]
    (if-let [render-fn (get-in session-page [:data :view]) ]
      render-fn
      [:div.content
       [:h1 "page not found"]])))

;; -------------------------
;; Initialize app

(defn mount-components []
  (rd/render [page] (.getElementById js/document "app")))

(defn init! []
  (load-interceptors!)
  (routes/init-routes!)
  (mount-components))

(comment
  

  )
