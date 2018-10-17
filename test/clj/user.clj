(ns user
  (:require [mount.core :as mount]
            reagent-forms.core))

(defn start []
  (mount/start-without #'reagent-forms.core/repl-server))

(defn stop []
  (mount/stop-except #'reagent-forms.core/repl-server))

(defn restart []
  (stop)
  (start))




