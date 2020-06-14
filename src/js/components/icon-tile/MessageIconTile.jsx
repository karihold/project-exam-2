import React from 'react';

const MessageInfoTile = ({ color, title, icon, text }) => {
  return (
    <article className={`message-info-tile message-info-tile--${color}`}>
      <h2 className="message-info-tile__h2">{title}</h2>
      <p className="message-info-tile__text">
        <span className={`icon icon--${icon}`}></span> {text}
      </p>
    </article>
  );
};

export default MessageInfoTile;
