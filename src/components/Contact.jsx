import React from "react";
import PersonIcon from "../icons/personal.svg?react";
import PhoneIcon from "../icons/phone.svg?react";
import s from "./Contact.module.css";

const Contact = ({ id, name, number, onDeleteContact }) => {
    return(
      <div className={s.contact}>
      <div className={s.details}>
        <PersonIcon className={s.icon} /> 
        <p className={s.name}>{name}</p>
        <PhoneIcon className={s.icon} /> 
        <p className={s.number}>{number}</p>
      </div>
      <button className={s.deleteButton} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </div>
  );
}
  

export default Contact;