import React, { useState } from 'react';

const MenuButton = ({ isActive, onClickHandler }) => {
  return (
    <button id="menu-button" className={isActive ? 'menu-button--active' : ''} onClick={onClickHandler}>
      <span id="menu-bar-1"></span>
      <span id="menu-bar-2"></span>
      <span id="menu-bar-3"></span>
    </button>
  );
};

export default MenuButton;
