(ns reformation.core-test
  "core functions to start/stop the application"
  (:require [reformation.handler :as handler]
            [luminus.http-server :as http]
            [clojure.tools.cli :refer [parse-opts]]
            [clojure.tools.logging :as log]
            [mount.core :as mount])
  (:gen-class))

(def cli-options
  [["-p" "--port PORT" "Port number"
    :parse-fn #(Integer/parseInt %)]])

(mount/defstate ^{:on-reload :noop}
  http-server
  :start
  (http/start
   (-> {}
       (assoc :host "127.0.0.1" :handler #'handler/app :port 3000)))
  :stop
  (http/stop http-server))

(defn stop-app
  "Stops the app and logs an info"
  []
  (doseq [component (:stopped (mount/stop))]
    (log/info component "stopped"))
  (shutdown-agents))

(defn start-app
  "Starts the app and logs an info"
  [args]
  (doseq [component (-> args
                        (parse-opts cli-options)
                        mount/start-with-args
                        :started)]
    (log/info component "started"))
  (.addShutdownHook (Runtime/getRuntime) (Thread. stop-app)))


(defn -main [& args]
  (cond
    (some #{"migrate" "rollback"} args)
    (System/exit 0)
    
    :else
    (start-app args)))
