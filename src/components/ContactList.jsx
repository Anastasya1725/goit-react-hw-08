import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsOps";
import { selectFilteredContacts, selectLoading, selectError } from "../redux/contactsSlice";
import Contact from "./Contact";

const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

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

