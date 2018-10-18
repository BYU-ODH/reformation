(ns reagent-forms.db.approvals
  (:require
   [reagent-forms.db.core :as db]
   [reagent-forms.db.users :as users]
   [reagent-forms.approval-common :refer [APPROVAL-FLOW DEFAULT-APPROVERS]]
   [honeysql.core :as sql]
   [honeysql.helpers :as h]))

(def CREATE (partial db/CREATE :approvals))
(def READ
  "Get approval with `id`"
  (partial db/READ :approvals))
(def UPDATE (partial db/UPDATE :approvals))
(def DELETE (partial db/DELETE :approvals))


(defn -approval-approves?
  "Read if approval `id` has given approval"
  [id]
  (READ id [:approval-provided]))

(defn approves?
  "Determine whether approval is provided upon a variety of inputs.

  map: assumed to be an approval mapping
  nil or boolean: identity
  id: an approval-id
  "
  [approval-map]
  (cond
    (map? approval-map)  (:approval-provided approval-map)
    (or (boolean? approval-map) (nil? approval-map)) approval-map
    (number? approval-map) (-approval-approves? approval-map)
    :else (throw (ex-info "Invalid input to approves" {:arg approval-map}))))

(def LOGIC-RELATIONS {:AND (fn [s] (every? approves? s))
                      :OR (fn [s] (some approves? s))
                      :NOT (fn [s] (complement #(some approves? s)))})

(defn cancel-approval-decision
  "Cancel a decision made for approval"
  [approval-id]
  (db/UPDATE :approvals approval-id {:approval-provided nil}))

(defn apply-approval!
  "Apply approval to approval-id"
  [approval-id]
  (db/UPDATE :approvals approval-id {:approval-provided true
                                     :approval-date (java.util.Date.)}))

(defn apply-denial!
  "Apply denial to the `approval-id`"
  [approval-id]
  (db/UPDATE :approvals approval-id {:approval-provided false}))

(defn clear-approval-logic!
  ([]
   (-> (h/delete-from :approval-logic)
       sql/format
       db/dbdo!))
  ([approval-id]
   (-> (h/delete-from :approval-logic)
       (h/where [:= :id approval-id])
       sql/format
       db/dbdo!)))

(defn clear-approval-roles! []
  (-> (h/delete-from :approval-roles)
      sql/format
      db/dbdo!))

(defn get-application-id-for-approval 
  "Get the application an approval belongs to"
  [approval-id]
  (db/READ :approvals approval-id [:application-id]))

(defn get-application-for-approval 
  "Get the application an approval belongs to"
  [approval-id & [select-keys]]
  (let [application-id (get-application-id-for-approval approval-id)]
    (db/READ :applications application-id select-keys)))

(defn get-approval-roles-for-logic
  [logic-id]
  (-> {:select [:*]
       :from [:approval-roles]
       :where [:= :approval-logic logic-id]}
      sql/format db/dbr))

(defn get-approvals-for-application [application-id] ;; TODO this doesn't really sort them
  (-> (h/select :a.*)
      (h/from [:approvals :a])
      (h/where [:= :a.application-id application-id])
      (h/order-by [:a.id])
      sql/format
      db/dbr))

(defn get-default-logic
  "Get the default logic schema for this application"
  []
  (let [all-logic (db/READ :approval-logic)]
    (cond
      (= 1 (count all-logic))
      (first all-logic)

      (< 1 (count all-logic))
      (or
       (first (filter #(get-in % [:info :default]) all-logic))
       (first all-logic))

      :else (throw (ex-info "No default logic available" {:all-logic all-logic})))))


(defn get-approval-logic
  "Get the logic-form of `approval-id`"
  [approval-id]
  (-> (db/READ :approval-logic approval-id [:expression])))

(defn get-applications-for-approval-logic
  [logic-id]
  (-> {:select [:apps.*]
       :from [[:applications :apps]
              ;[:approval-roles :roles]
              ]
       :join [:approvals
              [:and
               ;[:= :approvals.approval-position :roles.id]
               [:= :apps.id :approvals.application-id]]]
       ;:where [:= :roles.approval-logic logic-id]
       :group-by [:apps.id]
       }
      sql/format db/dbr
      ))


(defn get-approver-approval
  "Return the individual approval of approver for application, or a seq of them if he fills multiple rolls"
  [approver-id application-id]
  (let [sqlm
        {:select [:a.* :s.approval-name]
         :from [[:approval-roles :s]
                [:approvals :a]]
         :where [:and
                 [:= :a.application-id application-id]
                 [:= :a.approver-user approver-id]
                 [:= :a.approval-position :s.id]]}
        results (-> sqlm sql/format db/dbr)]
    (if (< 1 (count results))
      results
      (first results))))

(defn get-approval-by-approver
  "Get an approval by the id of the approver"
  [application-id approver-id-or-email]
  (let [approver-id (if (number? approver-id-or-email) approver-id-or-email
                        (:id (users/get-user-by-email approver-id-or-email)))]
    (get-approver-approval approver-id application-id)))


(defn delete-approvals! [application-id]
  (-> {:delete-from :approvals
       :where [:= :application-id application-id]} sql/format db/dbdo!))

(defn fully-approve!
  [application-id & [pmap]] 
  (let [{:keys [approval-roles approver approves]
         :or {approves true}} pmap]
    (doseq [a (get-approvals-for-application application-id)]
      (letfn [(do-update []
                (db/UPDATE :approvals (:id a)
                           (-> a
                               (assoc :application-id application-id
                                      :approver-user approver
                                      :approval-provided approves)
                               (dissoc :approval-name))))]
        (if approval-roles
          (if-not (set? approval-roles)
            (throw (Exception. "approval-roles should be a set"))
            (when (approval-roles (:approval-name a))
              (do-update)))
          (do-update))))))

(defmulti get-approval-roles-item
  "Get the `type` element of the approval flow, where
  `type` is the name or the nth list item of the workflow.
  (assumes a flat workflow)"
  (fn [role-name logic-id] (type role-name)))

(defmethod get-approval-roles-item
  java.lang.String
  [role-name logic-id]
  (-> (h/select :*)
      (h/from :approval-roles)
      (h/where [:and
                [:= :approval-name role-name]
                [:= :approval-logic logic-id]])
      sql/format
      db/dbr
      first))

(defmethod get-approval-roles-item
  java.lang.Long
  [nth-role logic-id]
  (let [roles (get-approval-roles-for-logic logic-id)]
    (nth roles nth-role)))

(defn get-position-approval [application-id position logic-id]
  (let [approval-roles-id (:id (get-approval-roles-item position logic-id))]
    (-> {:select [:*]
         :from [:approvals]
         :where [:and
                 [:= :approval-position approval-roles-id]
                 [:= :application-id application-id]]}
        sql/format db/dbr first)))

(defn get-logic-for-application
  "Return the approval-logic item(s) for a given application id"
  [application-id]
  (-> {:select [:logic.*]
       :from [[:approvals :a]]
       :join [[:approval-roles :s]
              [:= :a.approval-position :s.id]
              [:approval-logic :logic]
              [:= :logic.id :s.approval-logic]]
       :where [:= :a.application-id application-id]}
      sql/format db/dbr distinct))

(defn -approvals-into-expression
  "INTERNAL: swap the actual approval items into the expression string that names them"
  [approvals logic-expression]
  (into (empty logic-expression)
        (for [e logic-expression] (cond (string? e) (approvals e)
                                        (coll? e) (-approvals-into-expression approvals e)
                                        (keyword? e) e
                                        :else (throw (ex-info "Invalid item in logic expression" {:item e :expression logic-expression}))))))


(defn approvals-to-logic
  "Within the logic, replace each string with a map representing the approval item. Assumes there is only one logic for an application."
  [application-id]
  (let [approvals (into {} (for [a (get-approvals-for-application application-id)]
                             [(db/READ :approval-roles (:approval-position a) [:approval-name]) a]))
        logic (read-string (:expression (first (get-logic-for-application application-id))))]
    (-approvals-into-expression approvals logic )))


(defn approvals-needed
  "Get the approvals that haven't made a decision yet for `application-id`."
  [application-id]
  (filter (complement :approval-provided)
          (get-approvals-for-application application-id)))

(defn set-approver!
  [approval-id would-be-approver-id]
  (db/UPDATE :approvals approval-id {:approver-user would-be-approver-id}))

(defn set-approver-by-position!
  [{:keys [application-id approver-id position-name logic-id]}]
  (let [position-approval-id (:id (get-position-approval application-id position-name logic-id))]
    (set-approver! position-approval-id approver-id)))

(defn get-default-approver
  "Get the default approver given a role"
  [approval-name]
  (when-let [default-email (get DEFAULT-APPROVERS approval-name)]
    (users/get-new-or-existing-user default-email)))


(defn initialize-approvals!
  "Clear approvals for `application-id` and set new ones from the approval roles"
  ([application-id logic-id]
   (let [roles (get-approval-roles-for-logic logic-id)]
     (if (= 0 (count roles))
       (throw (ex-info "No roles found for specified logic"
                       {:logic-id logic-id}))
       (do 
         (delete-approvals! application-id)
         (doseq [role roles :let [role-name (:approval-name role) ]]
           (db/CREATE :approvals {:application-id application-id
                                  :approver-user (:id (get-default-approver role-name))
                                  :approval-position (:id role)
                                  :approval-provided nil})))))))

(defn approval-positions-needed
  [application-id & [verbose?]]
  (map #(db/READ :approval-roles (:approval-position %) (when-not verbose? [:approval-name]))
       (approvals-needed application-id)))

(defn get-user-approval-requests
  "Get all approvals awaiting an approval decision from `user-id`"
  [user-id]
  (-> (h/select :*)
      (h/from :approvals)
      (h/where [:= :approver-user user-id]
               [:= :approval-provided nil])
      sql/format
      db/dbr))

(defn reassign-approvals [from-id to-id]
  (db/dbu! :approvals {:approver-user to-id} ["approver-user = ?" from-id]))

(defn -initialize-logic-from-approval-sequence!
  "Given `approval-sequence`, initialize approval-logic.
  [] indicates ordered, #{} indicates unordered, and the logic relations are according to `approvals/LOGIC-RELATIONS`"
  ([] (-initialize-logic-from-approval-sequence! APPROVAL-FLOW))
  ([approval-sequence] (-initialize-logic-from-approval-sequence! "PRIMARY" approval-sequence))
  ([logic-name approval-sequence]
   (db/CREATE :approval-logic {:name logic-name :expression (str approval-sequence)})))


(defn -initialize-roles-from-approval-sequence! ;; TODO duplicate approvers
  "Given an approval-sequence, initialize all appropriate rolls in table `approval-roles`. Requires `logic-id` from `approval-logic` to specify which approval flow it belongs to."
  [approval-sequence logic-id]
  (doseq [a approval-sequence]
    (cond
      (vector? a) (-initialize-roles-from-approval-sequence! a logic-id)
      (and (keyword? a)
           (or (LOGIC-RELATIONS a)
               (LOGIC-RELATIONS
                (-> a clojure.string/lower-case keyword)))) nil
      (or (keyword? a)
          (string? a)) (db/CREATE :approval-roles {:approval-name (str a)
                                                    :approval-logic logic-id})
      (set? a) (-initialize-roles-from-approval-sequence! (vec a) logic-id)
      :else (throw (ex-info "Invalid roles item: not vector, keyword, or string." {:item a})))))


(defn initialize-approval!
  "Initialize approval roles and logic from input string and optional name, returning the approval-logic"
  ([]
   (initialize-approval! "Default Logic" APPROVAL-FLOW))
  ([approval-sequence]
   (initialize-approval! "Default Logic" approval-sequence)) 
  ([logic-name approval-sequence]
   (let [logic (-initialize-logic-from-approval-sequence! logic-name approval-sequence)]
     (-initialize-roles-from-approval-sequence! approval-sequence (:id logic))
     logic)))

(defn set-initialize-approval-roles!
  "Clear and re-initialize approval"
  []
  (doseq [id (map :id (db/READ :approval-logic))]
    (db/DELETE :approval-logic id))
  (initialize-approval!))

(defn -approval-check
  "Given `[boolean-function coll-or-items]` recursively evaluate `boolean-function` on `coll`"
  [logic-function coll]
  (let [logic-function (if (keyword? logic-function)
                         (or (logic-function LOGIC-RELATIONS)
                             (throw (ex-info (str "Invalid logic relation: " logic-function)
                                             {:logic-function logic-function
                                              :valid-functions (keys LOGIC-RELATIONS)})))
                         logic-function)]
    (logic-function (flatten
                     (for [a coll] (do
                                     (cond
                                       (vector? a) (-approval-check (LOGIC-RELATIONS (first a)) (rest a))
                                       (map? a) (approves? a)
                                       (set? a) (-approval-check logic-function a)
                                       :default (throw
                                                 (ex-info "Invalid value encountered in `-approval-check`"
                                                          {:val a
                                                           :coll coll})))))))))

(defn -next-approvals-needed
  "Recurse through `coll` to find the first things not approved according to `logic-function`. Will return a col of one if considering :AND [vector], otherwise will return a col that may contain multiple items awaiting approval."
  [logic-function coll]
  (when-not (-approval-check logic-function coll) ;; if it's approved, nil
    (->> coll
         (map #(cond (set? %) (when-not (-approval-check logic-function %)
                                (set (filter (complement approves?)
                                             (map (fn [m] (assoc m :approval-logic logic-function)) %))) ;; Only works for sets of maps
                                )
                     (vector? %) (when-not (-approval-check (first %) (rest %))
                                   (-next-approvals-needed (first %) (rest %)))
                     (map? %) (when-not (approves? %) (assoc % :approval-logic logic-function))
                     :else (throw (ex-info "Invalid item encountered in -next-approvals-needed" {:item % :coll coll}))))
         (filter (complement nil?)))))

(defn -approval-position-map
  "A map keying the ID of the approval position to the details of that position,
  considering the approval positions needed for `application-id`"
  [application-id]
  (into {} (for [a (approval-positions-needed application-id :verbose)]
             [(:id a) a])))


(defn apply-approval-positions
  "Taking a map of approvals, replace approval id with their actual position information"
  ([application-id] (apply-approval-positions
                     (-approval-position-map application-id)
                     (approvals-to-logic application-id)))
  ([positions approvals]
   (letfn [(update-approval [approval]
             (update approval :approval-position positions))]
     (map
      (fn [approval]
        (cond
          (map? approval) (update-approval approval)
          (set? approval) (into (empty approval) (map update-approval approval))
          :else (throw (ex-info
                        "Invalid data encountered in `apply-approval-positions` (not set or map)"
                        {:approval approval :type (type approval)}))))
      approvals))))


(defn next-approvals-needed
  "Get next approvals needed, with verbose details of approvals.
  Returns a collection containing all of the approvals that could be next. "
  [application-id]
  (let [positions (-approval-position-map application-id)
        all (approvals-to-logic application-id)
        sanitized (filter (complement empty?)
                          (-next-approvals-needed (first all) (rest all)))
        approvals (apply-approval-positions positions sanitized)
        first-approval (first approvals)]
    (cond
      (map? first-approval) (list first-approval)
      :else first-approval)))

(defn is-next-approval?
  "Checks whether `approval-id` is one of the next required approvals"
  ([approval-id]
   (is-next-approval? (get-application-for-approval approval-id [:id]) approval-id))

  ([application-id approval-id]
   (let [next (first (next-approvals-needed application-id))]
     (condp = (type next)
       clojure.lang.PersistentHashSet ((set (map :id next)) approval-id)
       clojure.lang.PersistentArrayMap (= approval-id (:id next))
       (throw (ex-info "Unrecognized type returned to `is-next-approval?`" {:type (type next) :next next})))
     )))

(defn next-approvers-emails
  "Return the email entries of all the next-approvers"
  [application-id]
  (let [next-approvals (next-approvals-needed application-id)]
    (for [approval next-approvals :let
          [approver (or (:approver-user approval)
                        (-> approval :approval-position :approval-name get-default-approver :id))]]
      (users/get-emails-for-user approver))))


(defn set-next-approver!
  "If there is clearly one approver next for `application-id`, update it to be `user-id`"
  [application-id user-id]
  (let [next-ids (map :id (next-approvals-needed application-id))
        approval-id (first next-ids)]
    (when (= 1 (count next-ids))
      (db/UPDATE :approvals approval-id {:approver-user user-id}))))


(defn get-pending-approvals
  "Get approvals where approver with `approver-id` is the NEXT approval needed"
  [approver-id]
  (filter #(is-next-approval? (:id %)) (get-user-approval-requests approver-id)))

(defn get-approvable-applications
  "Get the applications awaiting approval for user `uid`"
  [uid]
  (map #(let [aid (:id %)] (assoc
                            (get-application-for-approval (:id %)) :approval-id aid))
       (get-pending-approvals uid)))

(defn get-approvable-application-for-user
  "Get application `application-id` for user `uid` if it is one of the user's approvable applications. Useful for validation purposes."
  [application-id uid]
  (first (filter #(= application-id (:id %)) (get-approvable-applications uid))))

(defn is-next-approver?
  "Test whether user `uid` is a valid next approver for `application-id`"
  [uid application-id ]
  (boolean (get-approvable-application-for-user application-id uid)))

(defn application-approved?
  "Following the expression in `approval-logic`, determine whether approval for an application has been given"
  ([application-id] (application-approved? application-id (get-logic-for-application application-id)))
  ([application-id logic-id]
   (let [logic (approvals-to-logic application-id)]
     (-approval-check (LOGIC-RELATIONS (first logic)) (rest logic)))))

(defn has-approvals?
  "Boolean of whether the user has approvals that may need his attention"
  [netid]
  (let [uid (users/get-user-id netid)]
    (-> (get-approvable-applications uid) not-empty boolean)))

(defn approvers
  "Get the approver ids for `application-id`"
  [application-id]
  (->> {:select [:approver-user]
       :from [:approvals]
       :where [:= :application-id application-id]}
       sql/format db/dbr
       (map :approver-user)
       (filter (complement nil?))))
