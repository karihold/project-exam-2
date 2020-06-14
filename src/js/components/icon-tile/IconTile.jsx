import React from 'react';
import PropTypes from 'prop-types';

const IconTile = ({ label, title, type }) => {
  return (
    <article className="icon-tile" title={title}>
      {label && <p className="icon-tile__label">{label}</p>}
      <span className={`icon-tile__icon-${type}`}></span>
    </article>
  );
};

IconTile.propTypes = {
  label: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
  title: PropTypes.string,
  type: PropTypes.string.isRequired,
};

export default IconTile;
