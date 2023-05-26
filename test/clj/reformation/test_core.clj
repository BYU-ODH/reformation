(ns reformation.test-core
  "core functions to start/stop the application"
  (:require [reformation.handler :as handler]            
            [org.httpkit.server :as http]
            [clojure.tools.cli :refer [parse-opts]]
            [clojure.tools.logging :as log]
            [mount.core :as mount])
  (:gen-class))

(def cli-options
  [["-p" "--port PORT" "Port number"
    :parse-fn #(Integer/parseInt %)]])

(def config {:port 3000
             :host "127.0.0.1"})

(def server (atom nil))

(defn stop-server
  "Stop the http server, with optional delay"
  [&[delay]]
  (let [delay (or delay 500)]
    (when-let [s @server]
      (log/info "Stopping Server")
      (s :timeout delay))))

(mount/defstate ^{:on-reload :noop} http-server
  :start
  (http/run-server handler/app config)  
  :stop
  (stop-server))

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
    (log/info component "started with ⟫" config ))
  (.addShutdownHook (Runtime/getRuntime) (Thread. stop-app)))


(defn -main [& args]
  (cond
    (some #{"migrate" "rollback"} args)
    (System/exit 0)
    
    :else
    (start-app args)))

(comment
  http-server
  (http-server "/")
  
  )
