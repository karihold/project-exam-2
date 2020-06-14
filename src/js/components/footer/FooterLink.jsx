import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const FooterLink = ({ text, link }) => {
  return (
    <li className="footer-list__item">
      <Link className="footer-list__item-link" to={link}>
        {text}
      </Link>
    </li>
  );
};

FooterLink.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default FooterLink;
