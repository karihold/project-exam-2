import React from 'react';
import { useParams } from 'react-router-dom';

import FlipCard from '../components/cards/FlipCard';

const SearchResults = ({ establishments }) => {
  console.log(location);
  const parseQueryString = (queryString) => {
    return queryString
      .replace('?', '')
      .split('&')
      .reduce((paramObj, param) => {
        const [key, value] = param.split('=');
        paramObj[key] = decodeURIComponent(value);
        return paramObj;
      }, {});
  };

  const criterias = parseQueryString(window.location.search);

  const filterByCriterias = (hotel) => {
    const { adults, children, location, price } = criterias;

    const guests = [adults, children].reduce((totalGuests, numberOfGuests) => (numberOfGuests ? totalGuests + parseInt(numberOfGuests) : totalGuests), 0);

    const isDesiredLocation = !location ? true : hotel.name === location;
    const hasEnoughRooms = hotel.maxGuests >= guests;
    const isInPriceRange = !price ? true : hotel.price <= parseInt(price);

    return isDesiredLocation && hasEnoughRooms && isInPriceRange;
  };

  const searchResults = establishments.filter(filterByCriterias).map((hotel, index) => <FlipCard key={`results-${hotel.name}-${index}`} {...hotel} />);

  return <main className="search-results">{searchResults}</main>;
};

export default SearchResults;
