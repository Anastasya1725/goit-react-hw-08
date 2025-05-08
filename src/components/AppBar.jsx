import React from 'react';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import s from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <div className={s.left}>
          <Navigation />
        </div>
        <div className={s.right}>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </nav>
    </header>
  );
};

export default AppBar;
