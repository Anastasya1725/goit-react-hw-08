import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <h1>Welcome to the Contact Book!</h1>
      {isLoggedIn ? (
        <p>Use the navigation to manage your contacts.</p>
      ) : (
        <p>Please register or log in to view your contacts.</p>
      )}
    </div>
  );
};

export default HomePage;
