(ns reformation.fileupload
  (:require [clojure.string :as str]
            [reagent.core :refer [atom]]))

;; TODO clarify opt-map so we don't pass an unidentified thing around to parse-file and file-handler

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

(defn parse-file [{:keys [file allowed-extensions-f save-fn bad-ext-fn]}]
  (let [file-type (.-type file)
        file-size (size-format (.-size file))
        file-name (.-name file)
        file-extension (-> file-name (str/split ".") last)
        allowed-extensions (or allowed-extensions-f
                          identity)
        bad-ext-fn (or bad-ext-fn
                       #(js/alert (str  "Sorry; you can't upload files of type " %)))]
    (if (allowed-extensions file-extension)
      (save-fn file)
      (bad-ext-fn file-extension))))

(defn filelist-to-vec
  "http://www.dotkam.com/2012/11/23/convert-html5-filelist-to-clojure-vector/"
  [js-col]
  (-> (clj->js []) 
      (.-slice)
      (.call js-col)
      (js->clj)))

(defn file-handler
  "Handles an event of a file beign selected, getting the file from an event
  and including it in the `opt-map` for parse-file"
  [event opt-map]
  (let [files (or
               (-> event .-dataTransfer .-files)
               (-> event .-target .-files))
        fcount (.-length files)
        files (filelist-to-vec files)
        file (first files)]
    (.log js/console files)
    (if (> fcount 1)
      (js/alert "Please select only one file")
      (parse-file (assoc opt-map :file file)))))

(defn change-dragging
  "Change the status of dragging atom, stopping propogation"
  [event DRAGGING true?]
  (.stopPropagation event)
  (.preventDefault event)
  (reset! DRAGGING true?))

(defn generate-hidden-upload-input
  "Generate a hidden input prompt for the on-click event of the drop
  zone"
  [opt-map]
  (let [input (.createElement js/document "input")
        pfn (fn [file] (parse-file (assoc opt-map :file file))) ]
    (doto input
      (.setAttribute "type" "file")
      (.addEventListener "change" #(-> % .-target .-files (.item 0) pfn)))))

(defn drag-drop
  "Stop events and handle dropped file"
  [event DRAGGING opt-map]
  (change-dragging event DRAGGING false)
  (file-handler event opt-map))

(defn file-upload
  "Generate the hiccup necessary for a file-upload area, which can be clicked or have a file dropped on it.

  If no `submit-button` is given, it will auto-submit upon dropping using `submit-fn`"
  [{:keys [style-classes submit-text submit-fn error-text submit-button save-fn allowed-extensions-f]
    :or {submit-text "Click or Drop a File Here"}
    {:keys [drag-over inactive have-file]
     :or {drag-over "dragover"
          inactive "undragged"
          have-file "have-file"}} :style-classes
    :as opt-map}]
  (let [DRAGGING (atom false)]
    (fn []
      (let [extra-classes [(if @DRAGGING drag-over inactive)
                           have-file]
            maybe-auto-submit-fn (if-not submit-button submit-fn identity)]
        [:div.upload-content 
         [:div.upload.col-md-3
          {:class extra-classes
           :on-drag-over #(change-dragging % DRAGGING true)
           :on-drag-leave #(change-dragging % DRAGGING false)
           :on-drop (fn [e] (doto e
                              (change-dragging DRAGGING false)
                              (file-handler opt-map))
                      (maybe-auto-submit-fn)) 
           :on-click #(.click (generate-hidden-upload-input opt-map))}
          [:div.upload-text.text-center
           [:div.submit-text submit-text]
           [:div.error error-text]]]
         submit-button]))))
