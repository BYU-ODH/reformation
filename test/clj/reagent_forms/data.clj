(ns reagent-forms.data
  (:require
   [reagent-forms.config :refer [env]]
   [byu-ws.core :as ws]
   [byu-ws.oauth2 :as oauth]
   [clj-http.client :as client]
   [cheshire.core :as json]))

(defn get-pro-person-url [person-id]
  (str "https://api.byu.edu:443/domains/legacy/identity/person/PRO/personsummary/v1/" person-id))

(defn get-studentschedule-url [id-type id-val year-term]
  (clojure.string/join "/" [ "https://api.byu.edu:443/domains/legacy/academic/registration/enrollment/v1/studentschedule"
                            id-type
                            id-val
                            year-term]))

(defn get-yt []
  (let [date-url "https://api.byu.edu:443/records/controlDates/v1"
        response     (ws/get-standard-ws {:url date-url
                                          :client-id (-> env :reagent-forms :client-id)
                                          :client-secret (-> env :reagent-forms :client-secret)})]
    (-> response (get "content") first (get "yearTerm"))))

;; (defn get-user-info
;;   "Taking the authcode gained from BYU WS login, obtains 
;;   person's pid and netid, which it uses to aggregate data
;;   from the records and schedule services"
;;   [netid]
;;   (->
;;    (ws/get-standard-ws {:url (get-studentschedule-url "netid" netid (get-yt))
;;                         :client-id (-> env :reagent-forms :client-id)
;;                         :client-secret (-> env :reagent-forms :client-secret)})
;;    (get-in ["EnrollmentService" "response"])
;;    (select-keys ["preferred-first-name" "work-email-address" "person-id" "byu-id" "surname" "sort-name" "email-address"])))

(defn get-user-info
  "Taking the authcode gained from BYU WS login, obtains 
  person's pid and netid"
  [netid] ;(def netid "torysa")
  (let [r (get-in (ws/get-standard-ws {:url (get-pro-person-url netid)
                                       :client-id (-> env :reagent-forms :client-id)
                                       :client-secret (-> env :reagent-forms :client-secret)})
                  ["PersonSummaryService" "response"])]
    {:preferred-name (get-in r ["names" "preferred_name"])
     :work-email (get-in r ["contact_information" "work_email_address"])
     :other-email (get-in r ["contact_information" "email"])
     :person-id  (get-in r ["identifiers" "person_id"])
     :byu-id (get-in r ["identifiers" "byu_id"])
     :net-id  (get-in r ["identifiers" "net_id"])}))

(defn get-all-user-info
  [netid]
  (get-in (ws/get-standard-ws {:url (get-pro-person-url netid)
                               :client-id (-> env :reagent-forms :client-id)
                               :client-secret (-> env :reagent-forms :client-secret)})
          ["PersonSummaryService" "response"]))

