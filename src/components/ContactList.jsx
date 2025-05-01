import React from "react";
import { deleteContact } from '../redux/contactsOps';
import { selectContacts, selectLoading, selectError } from '../redux/contactsSlice';
import { useSelector, useDispatch  } from "react-redux";
import {  selectNameFilter } from "../redux/filtersSlice";
import Contact from "./Contact";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (id) => dispatch(deleteContact(id));

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p>Помилка: {error}</p>;

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
       <Contact
       key={id}
       contact={{ id, name, number }}
       onDelete={handleDelete}
     />
      ))}
    </ul>
  );
};

export default ContactList;
