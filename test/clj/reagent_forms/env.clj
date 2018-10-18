(ns reagent-forms.env
  (:require 
            [clojure.tools.logging :as log]
            [reagent-forms.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[reagent-forms started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[reagent-forms has shut down successfully]=-"))
   :middleware wrap-dev})
