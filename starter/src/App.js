import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

// Components
import { AppButton } from "./button-component";

// Form related stuff
import FormInitialValues from "./utils/formInitialValues";
import ContactFormSchema from "./utils/contactFormSchema";

// Styles
import styles from "./contactForm.module.scss";

function App() {
  return (
    <section className={styles.contactFormSection}>
      <div className={styles.contactFormContainer}>
        <div className={styles.contentBox}>
          <h1 className={styles.headingTxt}>Contact Us</h1>
          <p className={styles.taglineTxt}>Feel free to contact with us!</p>
        </div>
        <Formik
          initialValues={FormInitialValues}
          validationSchema={ContactFormSchema}
          onSubmit={() => {}}
        >
          {({ errors, touched }) => (
            <Form className={styles.authForm}>
              <div>
                <div className={styles.fieldWrapperClassName}>
                  <Field
                    autoComplete="off"
                    type="name"
                    className={styles.fieldClassName}
                    name="name"
                    placeholder="name"
                    required={true}
                  />
                </div>
                {errors.name && touched.name ? (
                  <span className={styles.errorMsg}>
                    <ErrorMessage name="name" />
                  </span>
                ) : null}
              </div>
              <div>
                <div className={styles.fieldWrapperClassName}>
                  <Field
                    autoComplete="off"
                    type="email"
                    className={`${errors.email && styles.validatedInput} ${
                      styles.fieldClassName
                    }`}
                    name="email"
                    placeholder="Email"
                    required={true}
                  />
                </div>
                {errors.email && touched.email ? (
                  <span className={styles.errorMsg}>
                    <ErrorMessage name="email" />
                  </span>
                ) : null}
              </div>
              <div>
                <div
                  className={`${styles.fieldWrapperClassName} ${styles.messageField}`}
                >
                  <Field
                    as="textarea"
                    autoComplete="off"
                    className={`${errors.message && styles.validatedInput} ${
                      styles.fieldClassName
                    }`}
                    name="message"
                    placeholder="message"
                    required={true}
                  />
                </div>
                {errors.message && touched.message ? (
                  <span className={styles.errorMsg}>
                    <ErrorMessage name="message" />
                  </span>
                ) : null}
              </div>

              <div className={styles.btnBox}>
                <AppButton className={styles.btn} type="submit" title="Send" />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default App;
