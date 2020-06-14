import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Increment = ({ id, label, name, onIncrement }) => {
  const [value, setValue] = useState(0);

  const onIncrease = () => {
    const newValue = value + 1;
    setValue(newValue);
    onIncrement(name, newValue);
  };

  const onDecrease = () => {
    if (value <= 0) return;
    const newValue = value - 1;
    setValue(newValue);
    onIncrement(name, newValue);
  };

  return (
    <label className="increment-container" htmlFor={id}>
      {label}
      <div className="increment-counter-container">
        <button className="increment__button" type="button" onClick={onDecrease}>
          -
        </button>
        <span className="increment__count" id={id} name={name}>
          {value}
        </span>
        <button className="increment__button" type="button" onClick={onIncrease}>
          +
        </button>
      </div>
    </label>
  );
};

Increment.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onIncrement: PropTypes.func,
};

export default Increment;
