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
      name: Yup.string().required("Required"),
      number: Yup.string().required("Required"),
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
    <form onSubmit={formik.handleSubmit} className={s.form}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        className={s.input}
      />
      <input
        type="tel"
        name="number"
        placeholder="Phone number"
        value={formik.values.number}
        onChange={formik.handleChange}
        className={s.input}
      />
      <button type="submit" className={s.button}>
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
