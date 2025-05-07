import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink to="/" exact="true"> 
        Головна
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">Контакти</NavLink>
      )}
    </nav>
  );
};

export default Navigation;