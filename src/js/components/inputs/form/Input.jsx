import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ className, label, id, name, type = 'text', placeholder, onChangeHandler, validationMessage, register }) => {
  return (
    <label className={className} htmlFor={id}>
      {label}
      <span className="error-message">{validationMessage}</span>
      <input id={id} type={type} name={name} onChange={onChangeHandler} placeholder={placeholder} ref={register} />
    </label>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeHandler: PropTypes.func,
  validationMessage: PropTypes.string,
  register: PropTypes.func,
};

export default Input;
