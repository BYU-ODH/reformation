(ns reagent-forms.routes.home
  (:require [reagent-forms.layout :as layout]
            [compojure.core :refer [defroutes context GET POST ]]
            [ring.util.http-response :as response]
            [ring.util.response :as r]))

(defroutes home-routes
  (GET "/" req (layout/hiccup-render-cljs-base)))
