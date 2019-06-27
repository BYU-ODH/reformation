(ns reformation.shared-test
  (:require [reagent.core :as r]
            [reagent.session :as session]
            [clojure.string :as s]
            [cljs-time.core :as timec]
            [cljs-time.format :as timef]
            [ajax.core :refer [GET POST]]
            [accountant.core :as accountant])
  (:import [goog.ui Tooltip]))

(defn page-template [page-map]
  (let [{:keys [page-class header-title header-subtitle header-contents contents]} page-map]
    [:div.container {:class page-class}
     (when header-title
       [:section.hero
        [:div.hero-body
         [:h1.title header-title]
         (when-let [st header-subtitle]
           [:h2.subtitle st])
         (when-let [hc header-contents]
           [:div hc])]])
     (when contents contents)]))

