import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/auth/operations';
import { selectUser } from '../redux/auth/selectors';
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={s.userheader}>
      <span className={s.text}>Welcome, {user.name}</span>
      <button type="button" onClick={() => dispatch(logout())}>
        Exit
      </button>
    </div>
  );
};

export default UserMenu;