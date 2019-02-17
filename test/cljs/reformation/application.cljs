(ns reformation.application
  "The application with which users fill out the form to make or edit an application"
  (:require [reagent.core :as r]
            [reagent.session :as session]
            [reformation.shared-test :as shared :refer [cx]]
            [accountant.core]
            [reformation.routes :as rt]
            [reformation.core :as rfc]))

;; {:user
;;  {:name "Testerly Test",
;;   :email "toryanderson@byu.edu",
;;   :username "tsatest"},
;;  :chair {:name "Tory", :email "tory_anderson@byu.edu"},
;;  :faculty-participants "mandatory fac"}


(def hmeg-default [:disability
                   {:type :togglebox
                    :default-value true
                    :label "Are you disabled?"
                    :content [:disabled-explanation
                              {:label "Explanation for your disability"
                               :type :textarea}]}
                   :next-reviewers
                   [:reviewer1
                    [:name {:label "Reviewer 1"
                            :required? true
                                        ;:disabled (assigned?)
                            :subtext "Provide the email address of the first reviewer for this application. Must be an odd number of chars"
                            :validation-function #(odd? (count %))
                            :invalid-feedback "You must have an odd number of chars"}
                     :email {:label "Email for reviewer 1"
                             :required? true}]]
                   :select-box {:label "Selectbox for required"
                                :type :select
                                :required? true
                                :options [{:content "SELECT" :value ""}
                                          {:content "First" :value 1}
                                          {:content "Second" :value 2}]}])


(def SUBMISSION
  (rfc/reset-default (r/atom {}) hmeg-default))

(defn validate-and-submit "Validate the form and submit"
  [form-dom-id]
  (let [form (.getElementById js/document form-dom-id)
        update-id (session/get :application)]
    (-> form .-classList (.add "was-validated"))
    (if (.checkValidity form)
      (js/alert "You have errors in your form. Please correct them before submitting."))))

(defn tinput [value-fun & [opt-map]]
  (let [valpath (if (keyword? value-fun)
                  [value-fun]
                  value-fun)]
    (rfc/tinput SUBMISSION valpath opt-map)))

(def jumbotext
  [:div.info
   [:p "After approval by the appropriate college, operational elements of the program being proposed will be evaluated by Kennedy Center staff, while its academic quality and effectiveness are reviewed by the Academic Oversight Committee. This committee places special emphasis on clarity of learning outcomes and demonstration of appropriate purpose and rigor. Programs will be listed in the catalog under the sponsoring unit, and learning outcomes for approved programs should be placed on the BYU learning outcomes site. The sponsoring academic unit is responsible for program outcomes; however, the Oversight Committee will periodically review learning effectiveness in international programs."]
   [:p "Guidelines for operational aspects of international study programs may be found on our Faculty Resources page at " [:a {:href "http://kennedy.byu.edu/reformation/faculty/index.php"} "http://kennedy.byu.edu/reformation/faculty/index.php"]
    ", listed as “Principles to Guide International Study Programs”. Programs must adhere to the BYU International Travel Policy found at " [:a {:href "travelsmart.byu.edu"} "travelsmart.byu.edu."]]])

(defn generate-form []
  (let [form-id "needs-validation"
        validate (fn [e] (let [s (shared/get-value-from-change e)
                               element (.. e -target)]
                           (if (even? (count s))
                             (.setCustomValidity element "")
                             (.setCustomValidity element "You're odd!"))))]
    [:div.submission-form 
     [:form.form-control {:id form-id}
      (into [:div.form-contents
             [:a.btn.btn-success {:on-click #(.reportValidity (.getElementById js/document form-id))}
              "Validate"]]
            ;; [[:input {:on-change #(validate %)}]
            ;;  [:div.invalid-feedback "invalid here"]]
            
            (rfc/render-application hmeg-default SUBMISSION)
            )]]))

(defn internal-closure
  "Stuff with a Closure init"
  []
  (let [counter (r/atom 0)]
    (fn []
      [:div.counter
       [:h1 (str "Clicks: " @counter)]
       [:button {:on-click #(swap! counter inc)} "Add me"]])))


(defn app-page []
  (shared/page-template {:jumbo-title "Reformation Application"
                         :contents [:div.mycontent
                                    ;[internal-closure]
                                    [generate-form]]}))
