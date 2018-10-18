(ns user
  (:require [mount.core :as mount]
            [reagent-forms.figwheel :refer [start-fw stop-fw cljs]]
            [garden-gnome.watcher :as garden-gnome]
            reagent-forms.core-test))

(mount/defstate garden
  :start (garden-gnome/start! (garden-gnome/default-config))
  :stop (garden-gnome/stop! garden))


(defn start []
  (mount/start-without #'reagent-forms.core-test/repl-server))

(defn stop []
  (mount/stop-except #'reagent-forms.core-test/repl-server))

(defn restart []
  (stop)
  (start))


