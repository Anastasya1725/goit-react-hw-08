import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../redux/contactsSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
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
    onSubmit: (values, { resetForm }) => {
      const isDuplicate = contacts.some(
        contact => contact.name.toLowerCase() === values.name.toLowerCase()
      );

      if (isDuplicate) {
        alert(`${values.name} is already in contacts.`);
        return;
      }

      dispatch(addContact({ ...values, id: crypto.randomUUID() }));
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
       <div className={s.errormess}>{formik.errors.name}</div>
      <button type="submit" className={s.btnform}>
        Add Contact
      </button>
      </div>
    </form>
  );
};

export default ContactForm;
