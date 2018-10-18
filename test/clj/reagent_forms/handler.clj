(ns reagent-forms.handler
  (:require [compojure.core :refer [routes wrap-routes]]
            [reagent-forms.layout :refer [error-page]]
            [reagent-forms.routes.home :refer [home-routes]]
            [compojure.route :as route]
            [ring.util.http-response :as response]
            [ring.middleware.format-params :as mformat]
            [reagent-forms.env :refer [defaults]]
            [mount.core :as mount]
            [reagent-forms.middleware :as middleware]))

(mount/defstate init-app
  :start ((or (:init defaults) identity))
  :stop  ((or (:stop defaults) identity)))

(defn app-routes []
  (routes
   (-> #'home-routes
       (wrap-routes middleware/wrap-formats))
   (route/not-found
    (:body
     (error-page {:status 404
                  :title "page not found"})))))

(defn app [] (middleware/wrap-base (app-routes)))
