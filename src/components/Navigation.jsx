import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import s from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink to="/" exact="true"className={s.title}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">Contact</NavLink>
      )}
    </nav>
  );
};

export default Navigation;