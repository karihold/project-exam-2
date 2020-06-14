import React from 'react';
import { Link } from 'react-router-dom';

const MessageInfoTile = ({ color, title, showPlusIcon, text, link }) => {
  return link ? (
    <article className={`admin-tile admin-tile--${color}`}>
      <Link className="admin-tile__link" to={link}>
        {title && <h2 className="admin-tile__h2">{title}</h2>}
        {showPlusIcon && <span className="admin-tile__plus-icon">+</span>}
        <p className="admin-tile__text">{text}</p>
      </Link>
    </article>
  ) : (
    <article className={`admin-tile admin-tile--${color}`}>
      {title && <h2 className="admin-tile__h2">{title}</h2>}
      {showPlusIcon && <span className="admin-tile__plus-icon">+</span>}
      <p className="admin-tile__text">{text}</p>
    </article>
  );
};

export default MessageInfoTile;
