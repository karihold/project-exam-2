import React from 'react';
import { Link } from 'react-router-dom';

const OverviewPanel = ({ title, link, items }) => {
  return (
    <div className="overview-panel">
      <h2 className="overview__h2">{title}</h2>
      <Link className="overview__link" to={link}>
        <ul className="overview__ul">
          {items.map((item, index) => (
            <li className="overview__li" key={`overview-item-${title}-${index}`}>
              {item}
            </li>
          ))}
        </ul>
      </Link>
    </div>
  );
};

export default OverviewPanel;
