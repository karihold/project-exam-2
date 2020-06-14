import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink, useRouteMatch } from 'react-router-dom';
//Components
import Card from '../components/cards/Card';

//Files;
import hotels from '../../assets/images/hotels.jpg';
import bedAndBreakfasts from '../../assets/images/bed-and-breakfasts.jpg';
import guestHouses from '../../assets/images/guesthouses.jpg';

const cards = [
  { image: hotels, altText: 'Image of Bergen Docs', link: 'results.html', linkText: 'Hotels' },
  { image: bedAndBreakfasts, altText: 'Image of Bergen street in spring', link: 'results.html', linkText: 'Bed & Breakfasts' },
  { image: guestHouses, altText: 'Image of street in Bergen', link: 'results.html', linkText: 'Guesthouses' },
];

const Frontpage = ({}) => {
  return (
    <main className="card-line">
      {cards.map((card, index) => (
        <Card key={`card-${card.linkText}-${index}`} {...card} />
      ))}
    </main>
  );
};

export default Frontpage;
