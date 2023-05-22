(ns reformation.routes.home
  (:require [reformation.layout :as layout]))

(defn home-page [req]
  (let [username (:username req)
        userinfo {:username "dummy"}]
    (layout/hiccup-render-cljs-base userinfo)))

(defn home-routes
  "All the basic routes to be handled by the SPA"
  []
  ["/" {:get home-page}
   "/review" {:get home-page}])
