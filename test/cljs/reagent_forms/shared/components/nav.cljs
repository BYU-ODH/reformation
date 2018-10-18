(ns reagent-forms.shared.components.nav
  (:require [reagent-forms.shared.auth :as auth]
            [reagent-forms.shared-test :refer [cx] :as shared]
            [reagent-forms.routes :as rt]
            [reagent-forms.shared.components.lightbox :as lb]
            [clojure.string :as str]
            [reagent.core :as r]
            [reagent.session :as session]
            [ajax.core :refer [GET POST]]))

(defn nav-link [uri title page]
  [:li.nav-item
   {:class (when (= page (session/get :page)) "active")}
   [:a.nav-link
    {:href uri} title]])

(defn dropdown
  "Render a bootstrap dropdown menu into the nav, with :label as the label. 

  Called like:
           [dropdown {:menu-title \"General Information\"
                    :entry-classes \"entries\"
                    :menu-classes \"general\"}
	          [{:link \"#/about\" 
        	    :title \"About ISP\"}
	           {:link \"#/news\"
        	    :title \"Latest News\"}]]
  "
  [dropdown-config-map item-map-coll]
  (let [{:keys [menu-title entry-classes menu-classes li-classes]} dropdown-config-map
        inner-menu (into [:ul.dropdown-menu {:class menu-classes}]
                         (for [i item-map-coll]
                           [:li [:a (:a-map i)
                                 (:title i)]]))]
    [:li.nav-item {:class li-classes}
     [:div.dropdown {:class entry-classes}
      [:a.nav-link.dropdown-toggle
       {:data-toggle "dropdown" :data-target "#"}
       [:span menu-title]
       [:b.caret]]
      inner-menu]]))

(defn review-bar []
  [dropdown {:menu-title "Review"
             :entry-classes "review-entries"
             :menu-classes "review-menu"}
   [{:a-map {:href (rt/reviews-dashboard-route)}
     :title "My Reviews"}
    {:a-map {:href (rt/reviews-dashboard-route)}
     :title "My Submissions"}]])

(defn user-bar []
  [dropdown {:menu-title (str "Logged in as " (auth/get-username))
             :entry-classes "user-entry"
             :menu-classes "user-menu"
             :li-classes "user-root-node"}
   [{:a-map {:on-click auth/deauth!}
     :title "Signout"}]])

(defn navbar []
  ;; TODO http://v4-alpha.getbootstrap.com/components/navbar/
  (fn []
    [:div.all-navs
     ;; [:byu-header
     ;;  [:h1 {"slot" "site-title"} "International Study Programs"]]
     [lb/lightbox]
     [:nav.navbar.navbar-toggleable-md
      [:button.navbar-toggler.navbar-toggler-right
       {:data-toggle "collapse"
        :data-target "#navbarSupportedContent"
        :aria-controls "navbarSupportedContent"
        :aria-expanded "false"
        :aria-label "Toggle navigation"} 
       [:span.navbar-toggler-icon "☰"]]
      [:a.navbar-brand {:href "https://humanities.byu.edu"}
       [:img.pull-left {:src "/images/humanities-logo.png"}]]
      [:div#navbarSupportedContent.collapse.navbar-collapse
       [:ul.navbar-nav.mr-auto
        [nav-link (rt/home) [:i.fa.fa-home] :home]
        ;[nav-link (rt/applicant-route) "Apply" :app]
        ]
       [:ul.navbar-nav.mr-auto
        [nav-link "#" (str "Welcome, " (auth/get-username))]
                                        ;[user-bar]
                                        ;[review-bar]
        ]
       ]]]))

(defn footer
  "The site footer, including the byu-footer as `http://2017-components-demo.cdn.byu.edu/byu-footer.html`"
  []
  ;; [:byu-footer
  ;;  ;; [:byu-footer-column
  ;;  ;;  [:a {:href "http://kennedy.byu.edu"
  ;;  ;;       :alt "BYU Kennedy Center"}
  ;;  ;;   [:img.logo.kennedy {:src (cx "/images/kennedy_logo_300x50.png")}]]
  ;;  ;;  [:div.physical-address
  ;;  ;;   [:p "237 HRCB"]
  ;;  ;;   [:p "Brigham Young University"]
  ;;  ;;   [:p "Provo, UT 84602"]]
  ;;  ;;  [:div.contact-info
  ;;  ;;   [:p.phone
  ;;  ;;    [:span.label "Phone"]
  ;;  ;;    [:span.value "(801) 422-3377"]]
  ;;  ;;   [:p.fax
  ;;  ;;    [:span.label "Fax"]
  ;;  ;;    [:span.value "(801) 422-0382"]]
  ;;  ;;   [:p.email
  ;;  ;;    [:span.label "E-mail"]
  ;;  ;;    [:span.value
  ;;  ;;     [:a {:href "mailto:kennedy@byu.edu"} "kennedy@byu.edu"]]]]]
  ;;  ;; [:byu-footer-column
  ;;  ;;  [:a {:href "http://humanities.byu.edu"
  ;;  ;;       :alt "BYU Humanities"}
  ;;  ;;   [:img.logo.humanities {:src (cx "/images/byu-humanities-logo.png")}]]
  ;;  ;;  [:div.physical-address
  ;;  ;;   [:p "4001 JFSB"]
  ;;  ;;   [:p "Brigham Young University"]
  ;;  ;;   [:p "Provo, UT 84602"]]
  ;;  ;;  [:div.contact-info
  ;;  ;;   [:p.phone
  ;;  ;;    [:span.label "Phone"]
  ;;  ;;    [:span.value "(801) 422-2775"]]
  ;;  ;;   [:p.fax
  ;;  ;;    [:span.label "Fax"]
  ;;  ;;    [:span.value "(801) 422-0308"]]
  ;;  ;;   [:p.email
  ;;  ;;    [:span.label "E-mail"]
  ;;  ;;    [:span.value
  ;;  ;;     [:a {:href "mailto:humanities@byu.edu"} "humanities@byu.edu"]]]]]
  ;;  ]
  )
