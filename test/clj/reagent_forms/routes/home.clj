(ns reagent-forms.routes.home
  (:require [reagent-forms.layout :as layout]
            [compojure.core :refer [defroutes context GET POST ]]
            [ring.util.http-response :as response]
            [ring.util.io :refer [piped-input-stream]]
            [ring.util.response :as r]
            [clojure.java.io :as io]))

(defn home-page [req]
  (let [username (:username req)
        userinfo (-> (get-in req [:session :user-data])
                     (assoc :username username))]
    (layout/hiccup-render-cljs-base userinfo)))

(defroutes home-routes
  (GET "/" req (home-page req))
  (GET "/reviews" req (home-page req)) ;;;TODO: SECURE THIS
  (GET "/review/:application" req (home-page req)) ;;;TODO: SECURE THIS
  )
