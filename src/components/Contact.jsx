import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsSlice";
import PersonIcon from "../icons/personal.svg?react";
import PhoneIcon from "../icons/phone.svg?react";
import s from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const { id, name, number } = contact;

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={s.contact}>
      <div className={s.details}>
        <PersonIcon className={s.icon} />
        <p className={s.name}>{name}</p>
        <PhoneIcon className={s.icon} />
        <p className={s.number}>{number}</p>
      </div>
      <button className={s.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;

