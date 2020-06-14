import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ className, label, id, name, register }) => {
  return (
    <label className={className} htmlFor={id}>
      <input id={id} type="checkbox" name={name} ref={register} />
      {label}
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func,
  register: PropTypes.func,
};

export default Checkbox;
