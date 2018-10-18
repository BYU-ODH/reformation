(ns reagent-forms.review-front
  "The application with which users will review the form"
  (:require [reagent.core :as r]
            [reagent.session :as session]
            [reagent-forms.shared-test :as shared :refer [cx]]
            [accountant.core]
            [reagent-forms.routes :as rt]
            [reagent-forms.application :as application]
            [reagent-forms.core :as rfc]))

;;TODO: Validation
(def application 
  {:user
   {:name "Testerly Test",
    :email "toryanderson@byu.edu",
    :username "tsatest"},
   :chair {:name "Tory", :email "tory_anderson@byu.edu"},
   :faculty-participants "mandatory fac"})

(defn app-page []
  (shared/page-template {:jumbo-title "Form Review"
                         :contents (rfc/render-review application/hmeg-default application)}))
