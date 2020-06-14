import React from 'react';

const MessageItem = ({ name, subject, message }) => {
  return (
    <li className="admin-message">
      <div className="admin-message-right-section">
        <input className="admin-message__checkbox" type="checkbox" />
        <p className="admin-message__name">{name}</p>
      </div>
      <p className="admin-message__subject">{subject}</p>
      <p className="admin-message__text">{message}</p>
      <button className="admin-message__button">
        <span className="admin-message__button-dot"></span>
        <span className="admin-message__button-dot"></span>
        <span className="admin-message__button-dot"></span>
      </button>
    </li>
  );
};

export default MessageItem;
