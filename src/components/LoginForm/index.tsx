import React from 'react';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import styles from './loginForm.module.scss';

interface ILoginForm {
  email: string,
  password: string
}

const validSchema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().required().min(6)
});

export const LoginForm: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Register</h1>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={validSchema}
        onSubmit={(values: ILoginForm, { setSubmitting }: FormikHelpers<ILoginForm>) => console.log(values)}
      >
        {
          ({ errors, touched }) => (
            <Form className={styles.form}>
              <div className={styles.fieldContainer}>

                <label htmlFor="email">Email:</label>
                <Field
                  name='email'
                  id='email'
                  placeholder='john-stark@gmail.com...'
                  className={errors.email ? styles.formFieldDanger : styles.formField}
                />
              </div>

              <div className={styles.fieldContainer}>
                <label htmlFor="password">Password:</label>
                <Field
                  name='password'
                  id='password'
                  className={errors.password ? styles.formFieldDanger : styles.formField}
                />
              </div>

              <div className={styles.fieldContainer}>
                <button type='submit' className={styles.btnSubmit}>Submit</button>
              </div>
            </Form>
          )
        }
      </Formik>
    </div>
  );
}