import React from 'react';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import styles from './registerForm.module.scss';

interface IRegisterForm {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmedPassword: string
}

const validSchema = Yup.object().shape({
  firstName: Yup.string().required().min(3),
  lastName: Yup.string().required().min(3),
  email: Yup.string().required().email(),
  password: Yup.string().required().min(6),
  confirmedPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password not matched').required(),
});


export const RegisterForm: React.FC = () => {

  return (
    <div className={styles.container}>
      <h1>Register</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmedPassword: ''
        }}
        validationSchema={validSchema}
        onSubmit={(values: IRegisterForm, { setSubmitting }: FormikHelpers<IRegisterForm>) => console.log(values)}
      >
        {
          ({ errors, touched }) => (
            <Form className={styles.form}>
              <p className={styles.title}>Required fields marked <span className={styles.mark}>*</span></p>

                <div className={styles.fieldContainer}>
                <label htmlFor="firstName">First Name<span className={styles.mark}>*</span>:</label>
                <Field
                  name='firstName'
                  id='firstName'
                  placeholder='John...'
                  className={errors.firstName ? styles.formFieldDanger : styles.formField}
                />
              </div>

              <div className={styles.fieldContainer}>
                <label htmlFor="lastName">Last Name<span className={styles.mark}>*</span>:</label>
                <Field
                  name='lastName'
                  id='lastName'
                  placeholder='Stark...'
                  className={errors.lastName ? styles.formFieldDanger : styles.formField}
                />
              </div>

              <div className={styles.fieldContainer}>
                <label htmlFor="email">Email<span className={styles.mark}>*</span>:</label>
                <Field
                  name='email'
                  id='email'
                  placeholder='john-stark@gmail.com...'
                  className={errors.email ? styles.formFieldDanger : styles.formField}
                />
              </div>

              <div className={styles.fieldContainer}>
                <label htmlFor="password">Password<span className={styles.mark}>*</span>:</label>
                <Field
                  name='password'
                  id='password'
                  className={errors.password ? styles.formFieldDanger : styles.formField}
                />
              </div>

              <div className={styles.fieldContainer}>
                <label htmlFor="confirmedPassword">Confirm Password<span className={styles.mark}>*</span>:</label>
                <Field
                  name='confirmedPassword'
                  id='confirmedPassword'
                  className={errors.confirmedPassword ? styles.formFieldDanger : styles.formField}
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