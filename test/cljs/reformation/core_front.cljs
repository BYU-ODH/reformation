(ns reformation.core-front
  (:require [reagent.core :as r]
            [reagent.session :as session]
            [reformation.ajax :refer [load-interceptors!]]
            [reformation.shared-test :refer [page-template] :as shared]
            [reformation.routes :as routes]
            [reformation.status :as status]
            [reformation.application :as app]
            [secretary.core :as secretary :include-macros true]
            [accountant.core :as accountant]
            [reformation.review-front :as review]
            [ajax.core :refer [GET POST]]))

(defn home-page []
  [page-template {:jumbo-title "International Study Programs"
                  :jumbo-subtitle "Dashboard"
                  :contents [:div.dashboard.text-center
                             [:div.apply
                              [:a {:href (routes/applicant-route)
                                   :data-toggle "tooltip"
                                   :data-placement "top"
                                   :alt "Propose an International Study Program"
                                   :title "Propose an International Study Program"}
                               [:i.fa.fa-pencil-square-o]
                               [:span "Propose"]]]
                             ;; [:div.review
                             ;;  [:a {:href (routes/status-route)
                             ;;       :data-toggle "tooltip"
                             ;;       :data-placement "top"
                             ;;       :title "Your Proposal Applications"
                             ;;       :alt "Review Your Proposal Applications"}
                             ;;   [:i.fa.fa-envelope-open-o]
                             ;;   [:span "Status"]
                             ;;   ]]
                             ]}])


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
