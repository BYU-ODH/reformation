(ns reformation.components
  (:require [clojure.spec.alpha :as s]))



;-----------------------------------------------

(s/def ::fn-map (s/keys :req-un [::READ ::UPDATE ::valpath]))
(defn mk-spec [opt-map-spec]
  (s/cat :fn-map ::fn-map :opt-map opt-map-spec))


(defn checkbox
  "Create a checkbox"
  [{:keys [READ UPDATE valpath]}
   {:keys [validation-function disabled style-classes]}]
  (let [checked? (READ valpath)
        toggle-fn (comp (or validation-function identity)
                        #(UPDATE valpath not))]
    [:input {:class (into [(last valpath)] style-classes)
             :type "checkbox"
             :disabled disabled
             :on-change toggle-fn}]))


(defn select
  [fn-map m]
  (let [{:keys [options id on-change required style-classes disabled]
         :or {id "generic-select"
              options ["No :options provided"]}} m]
    (into [:select.form-control {:class style-classes
                                 :id id
                                 :name id
                                 :disabled disabled
                                 :required required
                                 :on-change on-change}]
          (for [{:keys [content value] :as o} options]
            (let [[c v] [(or content value o) (or value content o)]]
              [:option {:value v}
               (:content c)])))))

(defn radio [fn-map {:keys [options on-change disabled]}]
  (into [:div.form-group]
        (let [nom`name#]
          (for [o options]
            (let [[v disp] (if (map? o)
                             (let [{:keys [value contents]} o]
                               [(or value contents)
                                (or contents value)])
                             [o o])

                  v (cond (map? o) (or (:value o)
                                       (:contents o))
                          :default o)
                  disp (cond (map? o) (or (:contents o)
                                          (:value o))
                             :default o)
                  idsym (gensym v)]
              [:div [:input.form-control {:id idsym :type "radio" :name nom :value v :diabled disabled
                                          :on-change on-change}]
               [:label {:for idsym} disp]])))))



(defn textarea [fn-map opt-map] 
  (let [{:keys [id input-value placeholder disabled value char-count on-change required style-classes]} opt-map
        {:keys [limit enforce?]} char-count
        
        textarea [:textarea.form-control {:id id
                                          :class style-classes
                                          :name id 
                                          :rows 5
                                          :default-value input-value
                                          :value value
                                          :on-change on-change
                                          :required required
                                          :placeholder placeholder
                                          :disabled disabled}]]
    [:div.form-group
     textarea
     (when char-count
       (let [ccount (count value)
             class (if (< ccount limit)
                     "conforms"
                     "exceeded")]
         [:div.char-limit {:class class}
          (str ccount "/" limit " characters")]))]))


(defn hidden-input 
  "Generate a hidden input"
  [fn-map input-map]
  (let [{:keys [value id]} input-map]
    [:input {:type "hidden"
             :name id
             :id id
             :value value}]))

(def components {:checkbox   {:spec map?
                              :fn checkbox}

                 :select {:spec (s/keys :req-un [::options])
                              :fn select}

                 :radio      {:spec (s/keys :req-un [::options])
                              :fn radio}

                 :textarea   {:spec map?
                              :fn textarea}

                 :hidden     {:spec map?
                              :fn hidden-input}})
