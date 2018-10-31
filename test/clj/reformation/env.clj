(ns reformation.env
  (:require 
            [clojure.tools.logging :as log]
            [reformation.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[reformation started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[reformation has shut down successfully]=-"))
   :middleware wrap-dev})
