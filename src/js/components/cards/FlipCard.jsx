import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

const FlipCard = ({ name, image, price, id, description, email, maxGuests, selfCatering, address }) => {
  const history = useHistory();

  const onClick = () => {
    history.push(`/hotel/${encodeURIComponent(id)}`);
  };

  return (
    <article className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img className="flip-card__image" src={image} alt={`Profile image of ${name}`} />
          <h2 className="flip-card__hotel-name">{name}</h2>
        </div>
        <div className="flip-card-back">
          <p className="flip-card__price">£{price}</p>
          <div className="flip-card-text-container">
            <p className="flip-card__p">Description: {description}</p>
            <p className="flip-card__p">Contact: {email}</p>
            <p className="flip-card__p">Max Guests: {maxGuests}</p>
            <p className="flip-card__p">Self Catering: {selfCatering ? 'Yes' : 'No'}</p>
          </div>
          <button className="flip-card__select-button" onClick={onClick}>
            Book now
          </button>
        </div>
      </div>
    </article>
  );
};

export default FlipCard;
