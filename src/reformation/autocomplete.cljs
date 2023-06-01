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
                                        ;(console.log (str d)) ;; YYY
    (console.log d)))

(defn ac-update-fn
  "Renders the appropriate function to be executed on a goog listener event, extracting the value"
  [registration-key-to-update]
  (fn [goog-event]
    (let [v (shared/get-value-from-change goog-event)
          entry-id (-> goog-event .-row .-map :id)] 
      (log/info (str "received goog-event with id value " entry-id))
      (log/info ^:meta {:raw-console? true} goog-event)
      ;; TODO perform the appropriate DB update
      )))

(defn listen-to-me!
  "Set a goog.event UPDATE listener on dom item `auto-complete` that will perform `update-fn`"
  [auto-complete update-fn]
  (log/info "Firing listener on autocomplete"); on refresh this seems to break the autocomplete
  (events.listen auto-complete goog.ui.ac.AutoComplete.EventType.UPDATE ;; probably this cannot receive a dom object but needs an ac
                 (fn [e]
                   (update-fn e)))
  auto-complete)

(defn log-event
  "Log an incoming event"
  [e]
  (log/info "incoming-event:")
  (log/info ^:meta {:raw-console? true} e))

(defn _render
  "Trying to make this more reagent compatible by creating the thing ourself.

  `data` is a vector of maps of the approrpriate data
  
  `display-key` is the key within the ratom maps which will provide the entry name in the autocomplete.

  `ac-args` is a map containing information used for the dom input, and the goog renderer, matcher, and input-handler. It may have keys
  :data-subscription
  :input-id
  :separators
  :literals
  :multi?
  :throttle-time
  :fuzzy?
  :display-name
  :update-fn

  Note that the `:data-subscription` is needed for the `component-did-update` React lifecycle.
  `:update-fn` includes will receive the goog event

  Consulting https://github.com/google/closure-library/blob/34fcddbda216bb338b2e631b988eb52ed4fdf025/closure/goog/ui/ac/ac.js#L31"
  [data &[ac-args]] ;; REGRET that I have to receive data AND (:data-subscription ac-args) in order for this to update properly
  (let [{:keys [:input-id :separators :literals :multi? :throttle-time :fuzzy? :display-name :display-key :placeholder :data-subscription :update-fn] 
         :or {separators nil literals nil throttle-time nil
              display-key :no-display-key-given
              placeholder "Placeholder"
              display-name "Unnamed Autocomplete"
              input-id (gensym "autocomplete-")
              update-fn log-event
              multi? false
              fuzzy? true}} ac-args
        data-js (if display-key
                  (map #(DataItem. % display-key) data)
                  data)
                                        ;data-js (->> data (map display-key) (apply array))
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
                               (log/info "initial mounting ac")
                               (log/info ^:meta {:raw-console? true} this-dom)
                               (.attachInputs input-handler this-dom)
                               (listen-to-me! auto-complete update-fn)))
      :component-did-update (fn [_this]
                              (log/info "Updating ac mount")
                              (when-not data-subscription
                                (throw (ex-info "No :data-subscription given" ac-args)))
                              (let [data (->> data-subscription deref (map #(DataItem. % display-key)) (apply array))]
                                (.setRows matcher data)
                                (listen-to-me! auto-complete update-fn)))
      :component-will-unmount (fn [& _]
                                (log/info "disposing auto-complete")
                                (.dispose auto-complete))
      })))

(comment
  (let [display-key :state-name
        data-subscription (rfc/subscribe [:get-us-states])
        data-list (as-> data-subscription d (fnil deref d (atom {})) (map #(DataItem. d display-key)) #_(apply array d))]
    (js/console.log data-list)
    data-list) 
  (as-> {:foo 3} $ (first $)) ;; => [:foo 3]
  (-> {:foo 3} vals first) ;; => 3
  )

(defn autocomplete
  "The entry-function for reformation. `opt-map` is expected to have `:autocomplete-args`"
  [fn-map-with-path opt-map]
  (let [autocomplete-args (:autocomplete-args opt-map)
        subscription (:data-subscription autocomplete-args (atom {}))
        data @subscription]
    (log/info "My args:" autocomplete-args)
    (_render data autocomplete-args)))
