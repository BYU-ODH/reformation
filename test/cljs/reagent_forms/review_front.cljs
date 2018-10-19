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
(def hmeg-application 
  ;{:description "desc", :date-client #inst "2018-10-19T05:23:24.006-00:00", :faculty-participants "heidi, marie, tice", :anticipated "ant", :chair {:name "chair ", :email "emailofhis@own.com"}, :abstract "abs", :qualifications "qual", :budget {"Number of undergraduate students" "3", "Budget for graduates" "14", "Budget for undergraduate students" "8", "Explanation of other items" "", "Total budget" "", "Budget for supplies" "27", "Budget for other items" "", "Explanation of travel" "exp tra", "Explanation of supplies" "expl", "Number of graduate students" "22", "Budget for travel" "10"}, :timeline ""}

  {:description "Describing project is good", :date-client #inst "2018-10-19T04:39:36.314-00:00", :faculty-participants "Heidi, Marie, Tice", :anticipated "anticipateed", :chair {:name "Johnny Boy", :email "jonn@boy.com"}, :abstract "Abstraction", :qualifications "quality!!", :budget {"Number of undergraduate students" "3", "Budget for graduates" "3", "Budget for undergraduate students" "3", "Explanation of other items" "stuff", "Total budget" "300", "Budget for supplies" "-2", "Budget for other items" "300", "Explanation of travel" "getting there", "Explanation of supplies" "supplies", "Number of graduate students" "33", "Budget for travel" "300"}, :timeline "beginning, \n\nmiddle, \n\nend"}
  ;; {:user
  ;;  {:name "Testerly Test",
  ;;   :email "toryanderson@byu.edu",
  ;;   :username "tsatest"},
  ;;  :chair {:name "Tory", :email "tory_anderson@byu.edu"},
  ;;  :faculty-participants "mandatory fac"}
  )

(defn app-page []
  (shared/page-template {:jumbo-title "Form Review"
                         :contents (rfc/render-review application/hmeg-default hmeg-application)}))
