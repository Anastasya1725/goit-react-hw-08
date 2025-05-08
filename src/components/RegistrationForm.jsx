import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/operations';
import s from "./RegistrationForm.module.css";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too short a name!')
    .max(50, 'Name too long!')
    .required('Please enter a name.'),
  email: Yup.string().email('Invalid email format').required('Please enter your email'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters long.')
    .required('Please enter your password.'),
});

const RegistrationForm = ({ onSuccess }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values, { resetForm }) => {
        const resultAction = await dispatch(register(values));
        if (register.fulfilled.match(resultAction)) {
          onSuccess();
          resetForm();
        } else if (register.rejected.match(resultAction)) {
          console.error("error registration:", resultAction.payload);
        }
      }}
    >
  <Form className={s.form}>
        <div className={s.formGroup}>
          <label htmlFor="registrationName" className={s.label}>Name</label>
          <Field type="text" name="name" id="registrationName" className={s.input}/>
          <ErrorMessage name="name" component="div" className={s.error}/>
        </div>

        <div className={s.formGroup}>
          <label htmlFor="registrationEmail" className={s.label}>Email</label>
          <Field type="email" name="email" id="registrationEmail" className={s.input} />
          <ErrorMessage name="email" component="div" className={s.error}/>
        </div>

        <div className={s.formGroup}>
          <label htmlFor="registrationPassword" className={s.label}>Password</label>
          <Field type="password" name="password" id="registrationPassword" className={s.input}/>
          <ErrorMessage name="password" component="div" className={s.error}/>
        </div>

        <button type="submit" className={s.button}>Registration</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;