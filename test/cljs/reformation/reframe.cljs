(ns reformation.reframe
  (:require [re-frame.core :as rfc]
            [taoensso.timbre :as log]))

(rfc/reg-event-db
 :update-form
 (fn [db [_ kv f]]
   (let [path (into [:form] kv)]
     (update-in db path f))))

(rfc/reg-sub
 :read-form-item
 (fn [db [_ kv]]
   (let [path (into [:form] kv)]
     (get-in db path))))
