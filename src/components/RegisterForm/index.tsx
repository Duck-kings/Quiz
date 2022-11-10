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
  firstName: Yup.string(),
  lastName: Yup.string(),
  email: Yup.string(),
  password: Yup.string(),
  confirmedPassword: Yup.string(),
});

export const RegisterForm: React.FC = () => {
  return (
    <div>
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
            <Form>
              <div>
                <label htmlFor="firstName">First Name:</label>
                <Field name='firstName' id='firstName' placeholder='John...' />
              </div>

              <div>
                <label htmlFor="lastName">Last Name:</label>
                <Field name='lastName' id='lastName' placeholder='Stark...' />
              </div>

              <div>
                <label htmlFor="email">Email:</label>
                <Field name='email' id='email' placeholder='john-stark@gmail.com...' />
              </div>

              <div>
                <label htmlFor="password">Password:</label>
                <Field name='password' id='password' />
              </div>

              <div>
                <label htmlFor="confirmedPassword">Confirm Password:</label>
                <Field name='confirmedPassword' id='confirmedPassword' />
              </div>

              <div>
                <button type='submit'>Submit</button>
              </div>
            </Form>
          )
        }
      </Formik>
    </div>
  );
}