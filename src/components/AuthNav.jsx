import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import RegistrationModal from './RegistrationModal';

const AuthNav = () => {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  const openRegistrationModal = () => {
    setIsRegistrationModalOpen(true);
  };

  const closeRegistrationModal = () => {
    setIsRegistrationModalOpen(false);
  };

  return (
    <div>
      <button onClick={openRegistrationModal}>Реєстрація</button>
      <NavLink to="/login">Логін</NavLink>
      <RegistrationModal isOpen={isRegistrationModalOpen} onClose={closeRegistrationModal} />
    </div>
  );
};

export default AuthNav;