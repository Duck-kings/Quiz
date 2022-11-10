import React from 'react';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import styles from './loginForm.module.scss';

interface ILoginForm {
  email: string,
  password: string
}

const validSchema = Yup.object().shape({
  email: Yup.string(),
  password: Yup.string()
});

export const LoginForm: React.FC = () => {
  return (
    <div>
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
            <Form>
              <label htmlFor="email">Email:</label>
              <Field name='email' id='email' placeholder='john-stark@gmail.com...' />

              <label htmlFor="password">Password:</label>
              <Field name='password' id='password' />

              <button type='submit'>Submit</button>
            </Form>
          )
        }
      </Formik>
    </div>
  );
}