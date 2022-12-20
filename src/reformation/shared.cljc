(ns reformation.shared
  (:require [clojure.string :as s]))

(declare reviewify)

(defn get-value-from-change [e]
  (.. e -target -value))

(defn idify [s]
  (-> s s/lower-case (s/replace #" " "-") (s/replace #"[^0-9 \- a-z]" "")))

(defn str-or-conj
  "If `x` is a string, use str to join to it. Otherwise assume it is a coll and use conj."
  [x val] (if (string? x) (str x val) (conj x val)))

(defn reviewify-map
  "Parse the map and modify all keys for disabling"
  [m]
  (cond-> m
    true (assoc :disabled true)    
    (#{:textarea :input :text} (:type m :input)) (#(-> %
                                                     (update :style-classes str-or-conj
                                                             (str ((comp (fnil name :generic) :type) m) "-input"))
                                                     (assoc :type :div))) 
    (= (:type m) :select) (dissoc :type)
    (:content m) (update :content reviewify)))

(defn reviewify
  "Adjust a submission-default map for review rather than editing"
  [default-vector]
  (letfn [(m [x]
            (cond
              (map? x) (reviewify-map x)
              (vector? x) (reviewify x)
              :default x))]
    (map m default-vector)))

                                        ;(select-keys {:foo 1} #{"foo"})


