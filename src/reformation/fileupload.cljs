(ns reformation.fileupload
  (:require [reagent.core :refer [atom]]))

(defn round-to-2 "round to two decimals" [num]
  (-> num (* 100) (->> (.round js/Math)) (/ 100)))

(defn size-format [size]
  (let [kb (->  (/ size 1024) round-to-2)
        mb (-> (/ kb 1024) round-to-2)
        threshold 0.85
        label (cond
                (> mb threshold) (str mb " mb")
                (> kb threshold) (str kb " kb")
                :default (str size " bytes"))]
    label))

(defn parse-file [file]
  (let [file-type (.-type file)
        file-size (size-format (.-size file))
        file-name (.-name file)
        allowed-types #{
                        "text/plain"
                        }]
    (if (allowed-types file-type)
      true
      ;; (do
      ;;                                   ;(reset! *submit-text* (str file-name "\n(" file-size ")" ))
      ;;   (reset! *submit-button* {:text "Process File"
      ;;                            :class "enabled"
      ;;                            :disabled false})
      ;;   (reset! *submit-text* [:div.submit-text
      ;;                          [:span.filename file-name]
      ;;                          [:span.filesize file-size]])
      ;;   (reset! *file* file))
      (js/alert (str  "Sorry; you can't upload files of type " file-type)))))

(defn filelist-to-vec
  "http://www.dotkam.com/2012/11/23/convert-html5-filelist-to-clojure-vector/"
  [js-col]
  (-> (clj->js []) 
      (.-slice)
      (.call js-col)
      (js->clj)))

(defn file-handler [event]
  (let [files (or
               (-> event .-dataTransfer .-files)
               (-> event .-target .-files))
        fcount (.-length files)
        files (filelist-to-vec files)
        file (first files)]
    (.log js/console files)
    (if (> fcount 1)
      (js/alert "Please select only one file")
      (parse-file file))))

(defn change-dragging
  "Change the status of dragging atom, stopping propogation"
  [event A true?]
  (.stopPropagation event)
  (.preventDefault event)
  (reset! A true?))

(defn upload-input
  "Generate a hidden input prompt for the on-click event of the drop
  zone"
  []
  (let [input (.createElement js/document "input")]
    (doto input
      (.setAttribute "type" "file")
      (.addEventListener "change" #(-> % .-target .-files (.item 0) parse-file)))))

(defn drag-drop
  "Stop events and handle dropped file"
  [event A]
  (change-dragging event A false)
  (file-handler event))

;(def DRAGGING (atom false))
(defn file-upload
  "Generate the hiccup necessary for a file-upload area, which can be clicked or have a file dropped on it"
  [{:keys [style-classes submit-text error-text]
    :or {submit-text "Click or Drop a File Here"}
    {:keys [drag-over un-dragged have-file]
     :or {drag-over "dragover"
          un-dragged "undragged"
          have-file "have-file"}} :style-classes}]
  (let [DRAGGING (atom false)]
    (fn []
      (let [extra-classes [(if @DRAGGING drag-over un-dragged)
                           have-file]]
        [:div.upload.col-md-3
         {:class extra-classes
          :on-drag-over #(change-dragging % DRAGGING true)
          :on-drag-leave #(change-dragging % DRAGGING false)
          :on-drop #(change-dragging % DRAGGING false)
          :on-click #(.click (upload-input))}
         [:div.upload-text.text-center
          [:div.submit-text submit-text]
          [:div.error error-text]]]))))
