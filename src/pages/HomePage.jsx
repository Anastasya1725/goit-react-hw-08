import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';
import SearchBox from '../components/SearchBox';


const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div >
      <h1>Welcome to the Contact Book!</h1>
      {isLoggedIn ? (
        <div >
          <h2>Your contacts</h2>
          <ContactForm />
          <SearchBox />
          <ContactList />
        </div>
      ) : (
        <p>Please register or log in to view your contacts.</p>
      )}
    </div>
  );
};

export default HomePage;