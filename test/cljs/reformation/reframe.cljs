(ns reformation.reframe
  (:require [re-frame.core :as rfc]))

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

(rfc/reg-event-db
 :reset
 (fn reset [db [_]]
   (assoc-in db [:form] nil)))
