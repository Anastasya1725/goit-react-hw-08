import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={s.authNav}>
      <NavLink to="/login" className={s.link}>Login</NavLink>
      <NavLink to="/register" className={s.link}>Registration</NavLink>
    </div>
  );
};

export default AuthNav;

