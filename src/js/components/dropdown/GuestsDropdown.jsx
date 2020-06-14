import React, { useState } from 'react';
import Increment from '../inputs/form/Increment';

const incrementOptions = [
  {
    id: 'increment-adults',
    label: 'Adults',
    name: 'adults',
  },
  {
    id: 'increment-children',
    label: 'Children',
    name: 'children',
  },
];

const IncrementDropdown = ({ label, name, register }) => {
  const [showItems, setShowItems] = useState(false);
  const [value, setValue] = useState({});

  const onIncrementClick = (name, incrementValue) => {
    if (incrementValue === 0 && name in value) {
      delete value[name];
    } else {
      setValue({ ...value, [name]: incrementValue });
    }
  };

  const toggleItems = () => setShowItems(!showItems);

  return (
    <div className="guests-dropdown">
      <button className="guests-dropdown__button" type="button" name={name} value={JSON.stringify(value)} onClick={toggleItems} ref={register}>
        {label}
      </button>
      {showItems && (
        <section className="guests-dropdown-container">
          {incrementOptions.map((item, index) => (
            <Increment key={`dropdown-increment-${item.id}-${index}`} onIncrement={onIncrementClick} {...item} />
          ))}
        </section>
      )}
    </div>
  );
};

export default IncrementDropdown;
