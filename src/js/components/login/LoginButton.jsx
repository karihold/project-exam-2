import React from 'react';
import PropTypes from 'prop-types';

const LoginButton = ({ label, onClickHandler, className }) => {
  return (
    <button className={className} type="button" onClick={onClickHandler}>
      {label}
    </button>
  );
};

LoginButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};

export default LoginButton;
