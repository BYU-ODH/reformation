(ns reformation.validateform)

(defn validate-form []
  (let [form (.getElementById js/document "needs-validation")]
    (if (.checkValidity form)
      true
      false
      )))

(defn phone-number?
  "checks if a phone number is the correct format, must have 10-12 numbers and can be combinations
  of any of the following forms:
  123.456.7890
  +1 123 456 789
  1234567890
  1-123-456-7777"
  [num]
  (let [re #"^([\+]?\d{1,2}[\s-.]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"]
    (boolean (re-matches re num)))
  )

(defn present?
  "Returns false if x is nil or blank, true otherwise."
  [x]
  (not (clojure.string/blank? x)))

(defn email-address?
  "Returns true if the email address is valid, based on RFC 2822. Email
  addresses containing quotation marks or square brackets are considered
  invalid, as this syntax is not commonly supported in practise. The domain of
  the email address is not checked for validity."
  [email]
  ; not sure what this does {:pre [(present? email)]}
  (let [re (str "(?i)[a-z0-9!#$%&'*+/=?^_`{|}~-]+"
                "(?:\\.[a-z0-9!#$%&'*+/=?" "^_`{|}~-]+)*"
                "@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+"
                "[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]
    (boolean (re-matches (re-pattern re) email))))

(defn zip-code?
  "Returns true if the input string is of the zipcode format of 00000-0000 or 00000"
  [zip-code]
  (let [re #"^(\d{5})(-\d{4})?"]
    (boolean (re-matches re zip-code))))

(defn digits?
  "Returns true if a string consists only of numerical digits."
  [s]
  (boolean (re-matches #"\d+" s)))

(defn phone-number-symbols?
  "Returns true if a string consists only of numerical digits, or symbols found in a phone number"
  [s]
  (boolean (re-matches #"[\d\s.-]+" s)))

(defn date?
  "Returns true if a string is in the expected format of a date which is XX-XX-XXXX or
  XX/XX/XXXX"
  [date]
  (let [re #"^([01]?\d{1}[/-][0123]?\d{1}[/-]\d{4})"]
    (boolean (re-matches re date))))

(defn get-required-fields
  "get all fields labeled as required in the opt-map"
  [opt-map]
  (reduce #(if (:required %2) (conj %1 %2) %1) [] opt-map)
  )

(defn check-field-validity
  "returns a vector of the labels of all fields that fail .checkValidity"
  [fields]
  (reduce #(if (.checkValidity (.getElementById js/document (:id %2))) %1 (conj %1 (:label %2))) [] fields)
  )

(defn build-error-message
  "builds an error message off the fields that fail .checkValidity made up of the failed fields labels"
  [invalid-labels]
  (if (empty? invalid-labels)
    nil
    (reduce #(str %1 (str "\n" %2)) "The following fields contain invalid input:" invalid-labels)))

(defn alert-if-needed
  "Alerts the user by creating a popup containing information regarding which fields are filled in improperly"
  [opt-map]
  (#(if (nil? %) nil (do (js/alert %) true))
   (-> opt-map
       get-required-fields
       check-field-validity
       build-error-message))
  true)

(defn validate-form-feedback
  "Validates the form and gives feedback on which fields were invalid. Takes the schema of the application in a vector as an argument, which is the same schema you passed to render-application"
  [opt-map]
  (let [form (.getElementById js/document "needs-validation")]
    (if (and (alert-if-needed opt-map) (.reportValidity form))
      true
      false
      )))
