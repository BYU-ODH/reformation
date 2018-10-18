(ns reagent-forms.shared
  (:require [clojure.string :as s]))

(defn get-value-from-change [e]
  (.. e -target -value))

(defn idify [s]
  (-> s s/lower-case (s/replace #" " "-") (s/replace #"[^0-9 \- a-z]" "")))

;; (defn reviewify
;;   "Adjust a submission-default map for review rather than editing"
;;   [given-default]
;;   (letfn [(f [[k v]]
;;             [k 
;;           (cond 
;;             (vector? v) (conj v :disabled true)
;;             (map? v) (reviewify v))])]
;;     (map f given-default)))

(defn reviewify
  "Adjust a submission-default map for review rather than editing"
  [given-default]
  (into (array-map)
        (for [[k v] given-default]
          [k 
           (cond 
             (vector? v) (conj v :disabled true)
             (map? v) (reviewify v))])))
