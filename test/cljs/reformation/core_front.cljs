(ns reformation.core-front
  (:require [reagent.core :as r]
            [reagent.session :as session]
            [reformation.ajax :refer [load-interceptors!]]
            [reformation.shared-test :refer [page-template] :as shared]
            [reformation.routes :as routes]
            [reformation.application :as app]
            [accountant.core :as accountant]
            [reformation.review-front :as review]))

(defn home-page []
  [page-template {:jumbo-title "Reformation"
                  :jumbo-subtitle "Dashboard"
                  :contents [:div.dashboard.text-center
                             [:div.apply
                              [:a {:href (routes/applicant-route)
                                   :data-toggle "tooltip"
                                   :data-placement "top"
                                   :alt "Proposal Form"
                                   :title "Propose Form"}
                               [:i.fa.fa-pencil-square-o]
                               [:span "Propose"]]]]}])


(def pages
  {:home #'app/app-page
   :review #'review/app-page
   :app #'app/app-page})

(defn page []
  [(pages (session/get :page))])


;; -------------------------
;; Initialize app

(defn mount-components []
  (r/render [#'page] (.getElementById js/document "app")))

(defn init! []
  (load-interceptors!)  
  (accountant/dispatch-current!)
  (mount-components))
