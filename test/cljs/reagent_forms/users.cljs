(ns reagent-forms.users
  "User details page"
  (:require [reagent.core :as r]
            [reagent-forms.shared :as shared]
            [reagent-forms.shared.auth :as auth]
            [reagent-forms.shared.components.input :as i]
            [reagent-forms.routes :as rt]
            [accountant.core :as a]
            [ajax.core :refer [GET POST]]))

(def USER (r/atom @auth/USER))

(defn init-user []
  (reset! USER @auth/USER))

(defn tinput [value-path & [opt-map]]
  (let [valpath (if (keyword? value-path)
                  [value-path]
                  value-path)]
    (i/tinput USER valpath opt-map)))

  (defn submit! "Submit the USER atom"
  []
    (let [url "/user-details"
        method POST
          pmap {:handler (fn [r]
                           (prn r)
                           (-> USER (reset! (first r)))
                           (js/alert "Changes Successful"))
              :__anti-forgery-token js/csrfToken
              :error-handler (fn [e] (js/alert "There has been an error"))
              :params {:user @USER}}]
    (method url pmap)))

(defn validate-and-submit "Validate the form and submit"
  [form-id]
  (let [form (.getElementById js/document form-id)]    
    (-> form .-classList (.add "was-validated"))
    (if (.checkValidity form)
      (submit!)
      (js/alert "You have errors in your form. Please correct them before submitting."))))

(defn generate-user-details []
  (let [form-id "user-details"
        change-password-group
        [:div.password-group
         [:h2 "Change Password"]
         [tinput :new-password {:label "New Password"
                                :type "password"}]
         [tinput :confirm-password {:label "Confirm Password"
                                    :type "password"}]]
        init-password-group
        [:div.password-group
         [:h2 "Set Password"]
         [tinput :new-password {:label "Password"
                                :type "password"}]
         [tinput :confirm-password {:label "Confirm Password"
                                    :type "password"}]]]
    [:div.user-details
     [:form {:id form-id}
      [tinput :username {:label "Name"
                     :required? true}]
      [tinput :email {:label "Email Address"
                      :required? true}]
      [tinput :phone {:label "Contact #"}]
      [tinput :current-password {:label "Current Password"
                                 :type "password"
                                 :subtext "Required to make any changes here"
                                 :required? true}]
      (if (auth/has-password?)
        change-password-group
        init-password-group)
      
      [:a.btn.btn-success {:on-click #(validate-and-submit form-id)} "SUBMIT"]
      [:a.btn.btn-danger {:on-click #(a/navigate! (rt/home))} "CANCEL"]]]))


(defn user-page []
  (init-user)
  [shared/page-template {:jumbo-title "User Details"
                         :contents [generate-user-details]}])

(defn approvals?
  "Does the user have any approvals waiting?"
  []
  (init-user)
  (:has-approvals? @USER))
