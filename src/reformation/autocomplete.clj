(ns reformation.autocomplete
  "Autocomplete is implemented in the cljs; this is here for compiler and docs.")

;; dummy for compilation

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
              fuzzy? true}} ac-args]))

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
)

