import React from 'react';

const FrontpageCard = ({ image, altText, link, linkText }) => {
  return (
    <article className="card">
      <img className="card__image" src={image} alt={altText} />
      <a className="card__button" href={link}>
        {linkText}
      </a>
    </article>
  );
};

export default FrontpageCard;
