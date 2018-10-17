(ns reagent-forms.shared.auth "Signin and user-control front-ends"
  (:require [clojure.string :as str]
            [reagent.core :as r]
            [reagent.session :as session]
            [ajax.core :refer [GET POST]]
            [accountant.core :as a]
            [reagent-forms.routes :as rt]
            [reagent-forms.shared :refer [get-value-by-id] :as shared]))

(defonce USER (r/atom nil))

(defn init-user
  "The USER is supplied by the back-end, which puts it in the /USER js variable"
  []
  (reset! USER (js->clj js/USER :keywordize-keys true)))

(defn get-username []
  (get @USER :username))

(defn get-user-id []
  (js/parseInt (get @USER :reagent-forms-user-id)))

(defn get-name []
  (get @USER :preferred-name))

(defn get-full-name []
  (get @USER :preferred-name))

(defn get-email [umap]
  (or
   (get umap :work-email)
   (get umap :other-email)))

(defn get-user-email []
  (get-email @USER))

(defn deauth! []
  (reset! USER nil)
  ;(a/navigate! (rt/home))
  )

(defn signed-in? [] (not-empty (get-username)))

(defn _request-admin?
  []
  (let [url "/admin/is-admin"
        p {:user-id (get-user-id)}
        h (fn [r] (swap! USER assoc :admin? (first r)))
        eh (fn [e] (do
                     (.log js/console "Error checking if admin")
                     (.log js/console e)))]
    (GET url {:handler h :params p :error-handler eh})))


(defn admin? []
  (let [admin? (:admin? @USER :none)]
    (if (= :none admin?)
      (_request-admin?)
      admin?)))

(defn authenticate! [authmap] ;;TODO: Error message on signup failure
  (let [url "/auth"
        h (fn [r]
            (-> USER (reset! (first r)))
            (a/navigate! (rt/home)))
        eh (fn [e] (deauth!))]
    (reset! USER nil)
    (POST url {:handler h
               :error-handler eh
               :params (select-keys authmap [:user-email :password])})
    USER))

(defn submit-signin [e]
  (.preventDefault e)
  (authenticate! {:user-email (get-value-by-id "user-email")
                  :password (get-value-by-id "password")}))

(defn signin-modal []
  [:div.modal.fade {:id "signin-modal"
                    :role "dialog"}
   [:div.modal-dialog
    [:div.modal-content
     [:div.modal-header
      [:button.close {:type "button"
                      :data-dismiss "modal"}
       "×"]
      [:h4.modal-title "Sign In"]]
     [:div.modal-body
      [:form.form-signin
       [:input.form-control {:name "user-email"
                             :id "user-email"
                             :placeholder "Email Address"
                             :required true
                             :autoFocus true}]
       [:input.form-control {:type "password"
                             :name "password"
                             :id "password"
                             :placeholder "Password"
                             :required true}]
       [:div.modal-footer
        [:button.btn.btn-success {:type "submit"
                                  :on-click submit-signin
                                  :data-dismiss "modal"
                                  } "Submit"]]]]]]])

(defn signin-button []
  [:li.nav-item.signin
   [:a.nav-link {:data-toggle "modal" :data-target "#signin-modal"} "Sign In"]])

(defn admin-only [f]
  (if (admin?)
    f
    [:div.forbidden
     [:h1 "Not Authorized"]]))

(defn user-can-view-application? [user app] ;TODO: implement this
  true)

(defn get-usermap
  "Get the minimal map containing user information" []
  @USER)

(defn has-password? []
  (:has-pass? @USER))

(defn format-role
  "string-format a given role, such as ASSOCIATE-DEAN"
  [role]
  (letfn [(split [x] (str/split x #"-"))
          (cap [xs] (map str/capitalize xs))
          (rejoin [xs] (str/join " " xs))]
    (-> role split cap rejoin)))

(defn is-applicant? [application]
  (= (get-username)
     (-> application :form :user :username)))

(defn can-edit? [form]
  (or (is-applicant? form)))
