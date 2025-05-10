import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addContact } from "../redux/contacts/operations";
import s from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Min 3 characters')
        .max(50, 'Max 50 characters')
        .required("Required"),
      number: Yup.string()
        .min(3, 'Min 3 characters')
        .max(50, 'Max 50 characters')
        .required("Required"),
    }),
    onSubmit: (newContact, { resetForm }) => {
      dispatch(addContact(newContact));
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={s.formcontact}>
      <div className={s.formGroup}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        className={s.formcontact}
      />
        <div className={s.errormess}>{formik.errors.name}</div>
      <label>Phone number</label>
      <input
        type="tel"
        name="number"
        value={formik.values.number}
        onChange={formik.handleChange}
        className={s.formcontact}
      />
        <div className={s.errormess}>{formik.errors.number}</div>
      <button type="submit" className={s.btnform}>
        Add Contact
      </button>
      </div>
    </form>
  );
};

export default ContactForm;