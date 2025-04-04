import React from "react";
import Contact from "./Contact";

const ContactList = ({contacts, onDeleteContact }) => {
    return(
        <ul>
         {contacts.map(contact => (
        <li key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteContact={onDeleteContact}
          />
        </li>
      ))}
      </ul>
    );
};

export default ContactList;