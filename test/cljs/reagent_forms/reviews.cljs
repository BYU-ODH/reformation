(ns reagent-forms.reviews
  "List of applications to review"
  (:require [reagent.core :as r]
            [reagent.session :as session]
            [reagent-forms.routes :as routes]
            [reagent-forms.shared-test :as shared :refer [cx]]
            [reagent-forms.shared.auth :as auth]
            [ajax.core :refer [GET POST]]))

(def APPLICATIONS (r/atom nil))

(defn test-request []
  (let [methods [GET POST]
        url "/admin/test"
        pmap {:handler (fn [r] (println r))
              :params {:user (auth/get-user-id)
                       :bogus "Hi there!"
                       }}]
    (doseq [m methods]
      (m url pmap))))

(defn get-applications
  "Query the server with the appropriate credentials and retrieve the applications awaiting user's approval"
  []
  (let [method GET
        url "/admin/applications"
        pmap {:handler (fn [r]
                         (reset! APPLICATIONS (first r)))
              :error-handler (fn [e]
                               (.log js/console "-------ERROR getting applications!")
                               (.log js/console e))
              :params {:user-id (auth/get-user-id)}}]
    (method url pmap)))

(defn parse-applications [applications]
  (let [columns [["Title" (fn [row] (get-in row [:form :program-title]))]
                 ["Applicant" (fn [row] (-> row :applicant :preferred-name))]
                 ["Date Proposed" (fn [row] (-> row :date shared/format-date))]]]
    (if (empty? applications)
      [:div.no-applications
       [:h2 "You have no applications pending review."]]
      (into [:table.applications.table.table-striped.table-bordered.table-hover
             [:tbody
              (into [:tr] (for [[label _] columns] [:th label]))
              (map #(into [:tr] %)
                   (for [a applications]
                     (let [app-id (:id a)]
                       (for [[_ valfun] columns]
                         [:td
                          [:a {:href (routes/review-route {:application app-id})}
                           (valfun a)]]))))]]))))

(defn maybe-init [&[force?]]
  (when (or force?
            (and (auth/signed-in?)
                 (nil? @APPLICATIONS)))
    (get-applications)))

(defn reviews-dashboard
  "Show all reviews that can be viewed by USER right now."
  []
  (let [*init (maybe-init)]
    (shared/page-template {:jumbo-title "Applications for Awaiting Your Review"
                           :contents (parse-applications (:reviews @APPLICATIONS))})))
