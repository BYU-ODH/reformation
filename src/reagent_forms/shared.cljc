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
  [default-vector]
  (letfn [(m [x]
            (cond
              (map? x) (assoc x :disabled true)
              (vector? x) (reviewify x)
              :default x))]
    (map m default-vector))

  ;; (reduce conj
  ;;         (for [[k v] (partition 2 default-vector)]
  ;;           [k 
  ;;            (cond 
  ;;              (vector? v) (reviewify v)
  ;;              (map? v) (assoc v :disabled true) )]))
  )
