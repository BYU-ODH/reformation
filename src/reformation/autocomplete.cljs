(ns reformation.autocomplete
  "The autocomplete element to be using goog.ac and built-in components"
  (:require [reagent.core :as r]
            [reagent.dom :as dom]
            [clojure.set :as set]
            [clojure.string :as str]
            [taoensso.timbre :as log]
            [reformation.shared :as shared])
  (:import goog.events
           goog.ui.ac))


;; rich map input so data can be retrieved from the json object on the `.-map` field
(deftype DataItem [map key]
  Object
  (toString [this]
    (key map)))

(comment
  (let [d (DataItem. {:name "ZZZ" :other "YYY"}
                     :other)]
    ;;(console.log (str d)) ;; YYY
    (console.log d)))

(defn create-ac-update-fn
  "Renders the appropriate function to be executed on a goog listener event, extracting the value"
  [UPDATE valpath val-key]
  (fn [goog-event]
    (let [entry-map (-> goog-event .-row .-map)
          selected-val (get entry-map val-key :val-not-found)] 
      (UPDATE valpath (constantly selected-val)))))

(defn listening-to-me!
  "Set a goog.event UPDATE listener on dom item `auto-complete` that will perform `update-fn`"
  [auto-complete update-fn]
  (events.listen auto-complete goog.ui.ac.AutoComplete.EventType.UPDATE
                 (fn [e]
                   (update-fn e)))
  auto-complete)

(defn log-event
  "Log an incoming event"
  [e]
  (log/info "incoming-event:")
  (log/info ^:meta {:raw-console? true} e))

(defn make-data-items
  "make data items from an array of maps with at least a key `:display-key`"
  [data & [display-key]]  
  (if display-key
    (apply array (map #(DataItem. % display-key) data))
    data))

(defn _render
  "`data` is a vector of maps of the approrpriate data
  
  `ac-args` is a map containing information used for the dom input, and the goog renderer, matcher, and input-handler. It may have keys
  :data-subscription
  :input-id
  :separators
  :literals
  :multi?
  :throttle-time
  :fuzzy?
  :display-name
  :val-key

  it is merged with the fn-map-with-valpath provided by reformation.

  Note that the `:data-subscription` is needed for the `component-did-update` React lifecycle.
  `:update-fn` includes will receive the goog event

  Consulting https://github.com/google/closure-library/blob/34fcddbda216bb338b2e631b988eb52ed4fdf025/closure/goog/ui/ac/ac.js#L31"
  [data ac-args]
  (let [{:keys [:input-id :separators :literals :multi? :throttle-time :fuzzy? :display-name :display-key :placeholder :data-subscription :val-key :UPDATE :valpath] 
         :or {separators nil literals nil throttle-time nil
              display-key :no-display-key-given
              valpath :no-valpath-given
              placeholder "Placeholder"
              display-name "Unnamed Autocomplete"
              input-id (gensym "autocomplete-")
              val-key :no-val-key-given             
              multi? false
              fuzzy? true}} ac-args
        data-js (make-data-items data display-key)
        update-fn (create-ac-update-fn UPDATE valpath val-key)
        matcher (goog.ui.ac.ArrayMatcher. data-js (not fuzzy?))
        renderer (goog.ui.ac.Renderer.)
        input-handler (goog.ui.ac.InputHandler. separators literals multi? throttle-time)
        auto-complete (goog.ui.ac.AutoComplete. matcher renderer input-handler)
        _attach-ac (.attachAutoComplete input-handler auto-complete)]
    (r/create-class
     {:display-name display-name
      :reagent-render
      (fn [_data argmap]      
        [:input {:id input-id :placeholder placeholder}])
      :component-did-mount (fn [this]
                             (let [this-dom (dom/dom-node this)]
                               (.attachInputs input-handler this-dom)
                               (listening-to-me! auto-complete update-fn)))
      :component-did-update (fn [_this _prev-argv]
                              (when-not data-subscription
                                (throw (ex-info "No :data-subscription given" ac-args)))
                              (let [data (-> data-subscription deref (make-data-items display-key))]
                                (.setRows matcher data)
                                #_(listening-to-me! auto-complete update-fn)))
      #_#_:component-will-unmount (fn [& _]
                                (log/info "disposing auto-complete")
                                (.dispose auto-complete))
      })))

(comment
  (let [display-key :state-name
        data-subscription (rfc/subscribe [:get-us-states])
        data-list (as-> data-subscription d (fnil deref d (atom {})) (map #(DataItem. d display-key)) #_(apply array d))]
    data-list) 
  (as-> {:foo 3} $ (first $)) ;; => [:foo 3]
  (-> {:foo 3} vals first) ;; => 3
  )

(defn autocomplete
  "The entry-function for reformation. `opt-map` is expected to have `:autocomplete-args`"
  [fn-map-with-path opt-map]
  (let [autocomplete-args (merge fn-map-with-path
                                 (:autocomplete-args opt-map))
        data @(:data-subscription autocomplete-args (atom {}))]
    (_render data autocomplete-args)))
