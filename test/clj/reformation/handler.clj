(ns reformation.handler
  "Handlers for the testing setup"
  (:require [compojure.core :refer [routes wrap-routes]]
            [reformation.layout :refer [error-page]]
            [reformation.routes.home :refer [home-routes]]
            [reformation.env :refer [defaults]]
            [mount.core :as mount]
            [reformation.middleware :as middleware]
            [reitit.ring :as ring]
            [ring.middleware.content-type :refer [wrap-content-type]]
            [ring.middleware.webjars :refer [wrap-webjars]]            
            [clojure.tools.logging :as log]))

(mount/defstate init-app
  :start ((or (:init defaults) identity))
  :stop  ((or (:stop defaults) identity)))

(mount/defstate app-routes
  :start
  (do
    (log/info "Starting ring-handler")
    (ring/ring-handler
     (ring/router
      [(home-routes)])
     (ring/routes
      (ring/create-resource-handler
       {:path "/"})
      (wrap-content-type
       (wrap-webjars (constantly nil)))
      (ring/create-default-handler
       {:not-found #(do (println "Not found:" (prn-str %))
                        (error-page {:status 404
                                     :title "404 - Page not found."
                                     :message "The page you are looking for is not found. Please check URL again."}))
        :method-not-allowed #(do
                               (constantly (error-page {:status 405
                                                        :title "405 - Not allowed"})))
        :not-acceptable #(do
                           (constantly (error-page {:status 406
                                                    :title "406 - Not acceptable"})))})))))

(defn app []
  (middleware/wrap-base #'app-routes))
