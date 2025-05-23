import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../redux/auth/operations';
import s from "./LoginForm.module.css";


const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid format email').required('Please enter email'),
  password: Yup.string().required('Please enter email'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, { resetForm }) => {
      const resultAction = await dispatch(login(values));
      if (login.fulfilled.match(resultAction)) {
        resetForm();
      } else if (login.rejected.match(resultAction)) {
        console.error("Помилка логіна:", resultAction.payload);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={s.form} >
      <div className={s.formGroup}>
        <label htmlFor="email" className={s.label}>Email</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className={s.input}
          id="email"
        />
        {formik.errors.email && formik.touched.email && (
          <div className={s.formGroup}>{formik.errors.email}</div>
        )}
      </div>

      <div className={s.formGroup}>
        <label htmlFor="password" className={s.label}>Password</label>
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          className={s.input}
          id="password"
        />
        {formik.errors.password && formik.touched.password && (
          <div className={s.formGroup}>{formik.errors.password}</div>
        )}
      </div>

      <button type="submit" >Enter</button>
    </form>
  );
};

export default LoginForm;