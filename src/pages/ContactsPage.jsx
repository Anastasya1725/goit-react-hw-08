import React from 'react';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import SearchBox from "../components/SearchBox";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h2>Contact</h2>
      <ContactForm />
      <div>
        <h3>Find a contact by name</h3>
        <Filter />
      </div>
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;