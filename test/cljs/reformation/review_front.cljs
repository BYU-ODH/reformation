(ns reformation.review-front
  "The application with which users will review the form"
  (:require [reagent.core :as r]
            [reagent.session :as session]
            [reformation.shared-test :as shared]
            [accountant.core]
            [reformation.application :as application]
            [reformation.core :as rfc]))

(def hmeg-app-vals {:description "description here", :date-client #inst "2018-12-15T13:34:22.325-00:00", :faculty-participants "too many to say", :anticipated "out", :chair {:name "ma chair", :email "em@mail.com"}, :abstract "good stuff coming!", :qualifications "quals!", :simple-selectbox "Option 2", :next-reviewers {:reviewer1 {:name "dude 1", :email "dude1@place.com"}, :reviewer2 {:name "dude 2"}}, :varied-selectbox "4", :budget {"Number of undergraduate students" "3", "Budget for graduates" "1", "Budget for undergraduate students" "5", "Explanation of other items" "stuff", "Total budget" "900", "Budget for supplies" "0", "Budget for other items" "39", "Explanation of travel" "going places", "Explanation of supplies" "93", "Number of graduate students" "2", "Budget for travel" "20"}, :timeline "times are good", :hidden-field 15})

;;TODO: Validation
#_(def app-vals {:outcomes-description "outcomes",
               :date-client "2019-02-19T21:20:07Z",
               :disabled true,
               :research-description "description",
               :faculty-mentor {:name "tsatest2", :email "tsatest2@non.com"},
               :title "A test project",
               :qualifications "qualifications",
               :purpose-and-significance "good stuff",
               :major "Ling",
               :amount-total 50,
               :proposed-budget [{:item "pizza", :amount "50", :purpose "food"}],
               :budget "",
               :disability-explanation "I get tired",
               :scholarship "Lots of citations coming soon",
               :user
               {:name "Testerly Test",
                :email "toryanderson@byu.edu",
                :username "tsatest"},
               :timetable "timetable"})

 (def test-form-vals ; 2022305
  {:a-js-date "SHOULD BE DEFAULT VALUE" :a-name "SHOULD BE DEFAULT VALUE" :myhidden-text "whisper", :mymultitable "", :mycheckbox false, :mymulti [{:item "uea", :amount "2", :purpose "uea"} {:item "aoeu", :amount "-1", :purpose "aoeu"}], :mytextarea "some area stuff", :myselect "", :mydefault-text "something good but really, really, really long", :amount-total 1, :mytoggle true, :myradio "", :myfileupload "", :mytext "stuff", :test "togged"})

(defn app-page []
  ;[:h3 [:b "Review page"]]
  (into [:form]
        (rfc/render-review (application/test-form) test-form-vals))
  ) 
