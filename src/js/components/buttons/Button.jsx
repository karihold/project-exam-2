import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, label, type = 'button', onClickHandler }) => {
  return (
    <button className={className} type={type} onClick={onClickHandler}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClickHandler: (props) => {
    if (props.type !== 'submit' && !props.onClickHandler) {
      return new Error(
        `The prop ${'`onClickHandler`'} is marked as required in \`Button\` of type \`${props.type ?? 'button'}\`, but its value is \`${props.onClickHandler}\``
      );
    }
  },
};
export default Button;
