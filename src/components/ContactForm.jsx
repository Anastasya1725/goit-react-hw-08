import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";


const ContactForm = ({ onAddContact }) => {
  const validationSchema  = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Min 3 characters')
      .max(50, 'Max 50 characters')
      .required('required to fill in'),
    number: Yup.string()
      .min(3, 'Min 3 characters')
      .max(50, 'Max 50 characters')
      .required('required to fill in'),
  });

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    onAddContact({ ...values, id: nanoid() });
    resetForm();
  };

  return (
    <div className={s.formcontact}>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            <span>Name:</span>
            <Field name="name" />
            <ErrorMessage className={s.errormess} name="name" component="div" />
          </label>
          <label>
            <span>Number:</span>
            <Field name="number" />
            <ErrorMessage className={s.errormess} name="number" component="div" />
          </label>
          <button  className={s.btnform} type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;