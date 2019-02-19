(defproject reformation "0.1.7"
  :description "Generate and manipulate form datastructures in pure Clojure, which can be read with Reagent."
  :url "http://tech.toryanderson.com"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.9.0"]]
  :source-paths ["src"]
  :profiles {:dev {:jvm-opts ["-server" "-Dconf=.lein-env"]
                   :resource-paths ["test/resources" "test/target/cljsbuild"]
                   :target-path "test/target/"
                   :main reformation.core-test

                   :clean-targets ^{:protect false}
                   [:target-path [:cljsbuild :builds :app :compiler :output-dir] [:cljsbuild :builds :app :compiler :output-to]]
                   
                   :figwheel
                   {:http-server-root "public"
                    :nrepl-port 7002
                    :css-dirs ["test/resources/public/css"]
                                        ;:nrepl-middleware
                                        ;[cemerick.piggieback/wrap-cljs-repl]
                    }
                   :garden {:builds [{:id "style"
                                      :source-path "src/clj/reformation/styles"
                                      :stylesheet orca.styles.main/main
                                      :compiler {:output-to "test/resources/public/css/style.css"
                                                 :pretty-print? true}}]}
                   :dependencies [[cheshire "5.8.1"]
                                  [clj-http "3.9.1"]
                                  [clj-json "0.5.3"]
                                  [clj-time "0.15.1"]
                                  [binaryage/devtools "0.9.10"]
                                  [com.andrewmcveigh/cljs-time "0.5.2"]
                                  [cljs-ajax "0.8.0"]
                                  [compojure "1.6.1"]
                                  [cprop "0.1.13"]
                                  [figwheel-sidecar "0.5.18"]
                                  [garden-gnome "0.1.0"]
                                  [garden "1.3.6"]
                                  [hiccup "1.0.5"]
                                  [luminus-immutant "0.2.5"]
                                  [metosin/ring-http-response "0.9.1"]
                                  [mount "0.1.16"] ;; Modular runtime operation
                                  [org.clojure/clojure "1.9.0"]
                                  [org.clojure/clojurescript "1.10.439" :scope "provided"]
                                  [org.clojure/tools.cli "0.4.1"]
                                  [org.clojure/tools.logging "0.4.1"]
                                  [org.webjars.bower/tether "1.4.0" :upgrade false]
                                  [org.webjars/bootstrap "4.0.0-alpha.6-1" :upgrade false]
                                  [org.webjars/font-awesome "4.7.0" :upgrade false]
                                  [ring-middleware-format "0.7.3"] ;; CLJ Routing
                                  [ring-webjars "0.2.0"] ;; Web assetts & their routing
                                  [ring/ring-defaults "0.3.2"] ;; CLJ routing
                                  [secretary "1.2.3"] ;; CLJS routing
                                  [venantius/accountant "0.2.4"]
                                  [reagent "0.8.1"];; REACT 
                                  [reagent-utils "0.3.2"];; & REACT
                                  [cljsjs/react "16.8.1-0"]
                                  [cljsjs/react-dom "16.8.1-0"]
                                  [cljsjs/react-dom-server "16.8.1-0"]]
                   :plugins [[com.jakemccrary/lein-test-refresh "0.14.0"]
                             [lein-doo "0.1.7"]
                             [lein-figwheel "0.5.12"]
                             [org.clojure/clojurescript "1.10.439"]
                             [lein-cprop "1.0.1"]
                             [migratus-lein "0.4.3"]
                             [lein-cljsbuild "1.1.4"]
                             [lein-garden "0.2.6"]]
                   :cljsbuild
                   {:builds
                    {:app
                     {:source-paths ["test/cljs" "src"]
                      :compiler
                      {:main "reformation.app"
                       :asset-path "/js/out"
                       :output-to "test/target/cljsbuild/public/js/app.js"
                       :output-dir "test/target/cljsbuild/public/js/out"
                       :source-map true
                       :optimizations :none
                       :pretty-print true}}}}
                   :source-paths ["test/clj"]
                   :repl-options {:init-ns user}}}
  )
