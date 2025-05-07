import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contacts/operations";
import PersonIcon from "../icons/personal.svg?react";
import PhoneIcon from "../icons/phone.svg?react";
import s from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={s.contact}>
      <p className={s.details}>
        <PersonIcon className={s.icon} />
        {contact.name}
      </p>
      <p className={s.details}>
        <PhoneIcon className={s.icon} />
        {contact.number}
      </p>
      <button className={s.btn} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
