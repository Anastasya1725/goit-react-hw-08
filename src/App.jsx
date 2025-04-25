import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "./redux/contactsSlice";

import ContactForm from "./components/ContactForm";
import SearchBox from "./components/SearchBox";
import ContactList from "./components/ContactList";

import s from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

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

  return (
    <div className={s.formWrapper}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;



