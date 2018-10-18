(ns reagent-forms.approval-common)

(def APPROVAL-FLOW [:AND
                    "MENTOR"
                    "ASSIGNER"
                    #{"REVIEWER1"
                      "REVIEWER2"}])
(def ADMIN-USERS #{"torysa"})

(def DEFAULT-APPROVERS
  {"ASSIGNER" "humanities-reagent-forms@byu.edu"
   "REVIEWER1" nil
   "REVIEWER2" nil})
