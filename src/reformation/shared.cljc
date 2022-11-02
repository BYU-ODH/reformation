(ns reformation.shared
  (:require [clojure.string :as s]))

(declare reviewify)

(defn get-value-from-change [e]
  (.. e -target -value))

(defn idify [s]
  (-> s s/lower-case (s/replace #" " "-") (s/replace #"[^0-9 \- a-z]" "")))

(defn reviewify-map
  [m]
  (cond-> m
    true (assoc :disabled true)
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

(def valid-html-args
  "Valid args, as per https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes"
  #{:accept
    :accept-charset
    :accesskey
    :action
    :align
    :allow
    :alt
    :async
    :autocapitalize
    :autocomplete
    :autofocus
    :autoplay
    :background
    :bgcolor
    :border
    :buffered
    :capture
    :challenge
    :charset
    :checked
    :cite
    :class
    :code
    :codebase
    :color
    :cols
    :colspan
    :content
    :contenteditable
    :contextmenu
    :controls
    :coords
    :crossorigin
    ;; :csp
    :data
    ;; data-*: data attributes will have to be handled specially if necessary
    :datetime
    :decoding
    :default
    :default-value
    :defer
    :dir
    :dirname
    :disabled
    :download
    :draggable
    :enctype
    ;; :enterkeyhint
    :for
    :form
    :formaction
    :formenctype
    :formmethod
    :formnovalidate
    :formtarget
    :headers
    :height
    :hidden
    :high
    :href
    :hreflang
    :http-equiv
    :icon
    :id
    ;; :importance
    :integrity
    ;; :intrinsicsize
    :Deprecated
    :inputmode
    :ismap
    :itemprop
    :keytype
    :kind
    :label
    :lang
    ;; :language
    ;; :loading
    :list
    :loop
    :low
    ;;:manifest
    :max
    :maxlength
    :minlength
    :media
    :method
    :min
    :multiple
    :muted
    :name
    :novalidate
    :open
    :optimum
    :pattern
    :ping
    :placeholder
    :poster
    :preload
    :radiogroup
    :readonly
    :referrerpolicy
    :rel
    :required
    :reversed
    :role
    :rows
    :rowspan
    :sandbox
    :scope
    ;;:scoped
    :selected
    :shape
    :size
    :sizes
    :slot
    :span
    :spellcheck
    :src
    :srcdoc
    :srclang
    :srcset
    :start
    :step
    :style
    ;;:summary
    :tabindex
    :target
    :title
    :translate
    :type
    :usemap
    :value
    :width
    :wrap})
