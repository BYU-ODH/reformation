(ns user
  (:require [mount.core :as mount]
            [reformation.figwheel :refer [start-fw stop-fw cljs]]
            [garden-gnome.watcher :as garden-gnome]
            reformation.core-test))

(mount/defstate garden
  :start (garden-gnome/start! (garden-gnome/default-config))
  :stop (garden-gnome/stop! garden))


(defn start []
  (mount/start-without #'reformation.core-test/repl-server))

(defn stop []
  (mount/stop-except #'reformation.core-test/repl-server))

(defn restart []
  (stop)
  (start))


