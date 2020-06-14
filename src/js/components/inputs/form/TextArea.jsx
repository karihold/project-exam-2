import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ className, label, id, name, placeholder, onChangeHandler, validationMessage, register }) => {
  return (
    <label className={className} htmlFor={id}>
      {label}
      <span className="error-message">{validationMessage}</span>
      <textarea id={id} name={name} onChange={onChangeHandler} placeholder={placeholder} ref={register} />
    </label>
  );
};

TextArea.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChangeHandler: PropTypes.func,
  validationMessage: PropTypes.string,
  register: PropTypes.func,
};

export default TextArea;
