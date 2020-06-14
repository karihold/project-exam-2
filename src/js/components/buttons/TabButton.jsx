import React from 'react';

const TabButton = ({ label, isActive, type = 'button', onClickHandler, value }) => {
  return (
    <button className={`admin-menu-button ${isActive ? 'active' : ''}`} type={type} onClick={onClickHandler} value={value}>
      {label}
    </button>
  );
};

export default TabButton;
