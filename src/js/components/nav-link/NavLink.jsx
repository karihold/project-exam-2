import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = ({ text, id, className, link }) => {
  return (
    <Link id={id} className={className} to={link}>
      {text}
    </Link>
  );
};

export default NavLink;
