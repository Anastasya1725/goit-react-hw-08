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
      <h1>Ласкаво просимо до Книги контактів!</h1>
      {isLoggedIn ? (
        <div >
          <h2>Ваші контакти</h2>
          <ContactForm />
          <SearchBox />
          <ContactList />
        </div>
      ) : (
        <p>Будь ласка, зареєструйтеся або увійдіть, щоб переглядати свої контакти.</p>
      )}
    </div>
  );
};

export default HomePage;