(defproject reagent-forms "0.1.3"
  :description "Generate and manipulate form datastructures in pure Clojure, which can be read with Reagent."
  :url "http://tech.toryanderson.com"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]]
  :source-paths ["src"]
  :profiles {:dev {:dependencies [ [figwheel-sidecar "0.5.13"]
                                  [cljs-ajax "0.7.1"]
                                  [com.andrewmcveigh/cljs-time "0.5.2"]
                                  [compojure "1.6.0"]
                                  [garden "1.3.2"]
                                  [hiccup "1.0.5"]
                                  [metosin/ring-http-response "0.9.0"]
                                  [mount "0.1.11"]
                                  [org.webjars.bower/tether "1.4.0"]
                                  [org.webjars/bootstrap "4.0.0-alpha.6-1"]
                                  [org.webjars/font-awesome "4.7.0"]
                                  [org.webjars/webjars-locator-jboss-vfs "0.1.0"]
                                  [ring-middleware-format "0.7.2"] ;; CLJ Routing
                                  [ring-webjars "0.2.0"] ;; Web assetts & their routing
                                  [ring/ring-defaults "0.3.1"] ;; CLJ routing
                                  [secretary "1.2.3"] ;; CLJS routing
                                  [venantius/accountant "0.2.3"]
                                  [reagent "0.8.0-alpha2"];; REACT 
                                  [reagent-utils "0.2.1"];; & REACT
                                  [cljsjs/react "16.1.0-0"]
                                  [cljsjs/react-dom "16.1.0-0"]
                                  [cljsjs/react-dom-server "16.1.0-0"]]
                   :plugins      [[com.jakemccrary/lein-test-refresh "0.14.0"]
                                  [lein-doo "0.1.7"]
                                  [lein-figwheel "0.5.12"]
                                  [org.clojure/clojurescript "1.9.908"]]
                   :cljsbuild
                   {:builds
                    {:app
                     {:source-paths ["test/cljs"]
                      :compiler
                      {:main "reagent-forms.app"
                       :asset-path "/js/out"
                       :output-to "target/cljsbuild/public/js/app.js"
                       :output-dir "target/cljsbuild/public/js/out"
                       :source-map true
                       :optimizations :none
                       :pretty-print true}}}}
                   :source-paths ["test/clj"]
                   :repl-options {:init-ns user}}}
  )
