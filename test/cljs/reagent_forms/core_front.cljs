(ns reagent-forms.core-front
  (:require [reagent.core :as r]
            [reagent.session :as session]
            [reagent-forms.ajax :refer [load-interceptors!]]
            [reagent-forms.shared-test :refer [page-template] :as shared]
            [reagent-forms.shared.components.nav :as nav]
            [reagent-forms.shared.auth :as auth]
            [reagent-forms.routes :as routes]
            [reagent-forms.review :as review]
            [reagent-forms.reviews :as reviews]
            [reagent-forms.status :as status]
            [reagent-forms.application :as app]
            [reagent-forms.users :as users]
            [secretary.core :as secretary :include-macros true]
            [accountant.core :as accountant]
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
                             (when (users/approvals?)
                               [:div.approve
                                [:a {:href (routes/reviews-dashboard-route)
                                     :data-toggle "tooltip"
                                     :data-placement "top"
                                     :title "Applications Requesting Your Approval"
                                     :alt "Applications Requesting Your Approval"}
                                 [:i.fa.fa-check-square-o]
                                 [:span "Approve" ]]])]}])


(def pages
  {:home #'app/app-page ;#'home-page
   :app #'app/app-page
   :review #'review/review-page
   :reviews-dashboard  #'reviews/reviews-dashboard
   ;:user #'users/user-page
   ;:status #'status/status-page
   ;:update #'app/app-page
   })

(defn page []
  [(pages (session/get :page))])


;; -------------------------
;; Initialize app

(defn mount-components []
  (r/render [#'nav/navbar] (.getElementById js/document "navbar"))
  (r/render [#'page] (.getElementById js/document "app"))
  (r/render [#'nav/footer] (.getElementById js/document "footer")))

(defn init! []
  (load-interceptors!)  
  (auth/init-user)
  (accountant/dispatch-current!)
  (mount-components))
