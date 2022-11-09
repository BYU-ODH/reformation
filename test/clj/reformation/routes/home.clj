(ns reformation.routes.home
  (:require [reformation.layout :as layout]
            [compojure.core :refer [defroutes context GET POST ]]
            [ring.util.http-response :as response]
            [ring.util.io :refer [piped-input-stream]]
            [ring.util.response :as r]
            [clojure.java.io :as io]))

(defn home-page [req]
  (let [username (:username req)
        userinfo {:username "dummy"}]
    (layout/hiccup-render-cljs-base userinfo)))

(defroutes home-routes
  (GET "/" req (home-page req))
  (GET "/review" req (home-page req)))
