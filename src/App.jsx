import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact } from "./redux/contactsSlice";
import { setFilter } from "./redux/filtersSlice";

import ContactForm from "./components/ContactForm";
import SearchBox from "./components/SearchBox";
import ContactList from "./components/ContactList";

import s from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters);


  useEffect(() => {
    const defaultContacts = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];

    if (contacts.length === 0) {
      defaultContacts.forEach(contact => dispatch(addContact(contact)));
    }
  }, [contacts.length, dispatch]);

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  const handleAddContact = newContact => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = contacts.filter(contact =>
    typeof contact.name === "string" &&
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={s.formWrapper}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;


