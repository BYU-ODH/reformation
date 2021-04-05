(ns reformation.validateform)

(defn validate-form []
  (let [form (.getElementById js/document "needs-validation")]
    (if (.checkValidity form)
      true
      false
      )))
