import React from 'react';
import RegistrationForm from './RegistrationForm';


const RegistrationModal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div  onClick={onClose}>
      <div  onClick={e => e.stopPropagation()}>
        <h2>Registration</h2>
        <RegistrationForm onSuccess={onClose} />
        <button type="button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default RegistrationModal;