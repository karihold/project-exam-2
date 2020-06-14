//Node_Modules
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';

import * as yup from 'yup';

//Components
import AutoCompleteSearch from '../inputs/search/AutoCompleteSearch';
import DatePicker from '../date-picker/DatePicker';
import GuestsDropdown from '../dropdown/GuestsDropdown';

const Search = ({ suggestions }) => {
  const { register, errors, handleSubmit } = useForm();

  const history = useHistory();

  const createQueryString = (data) => {
    const variables = Object.keys(data);

    const queryString = variables.reduce((queryString, variable, index) => {
      const value = data[variable];

      if (value) {
        const variableString = `${index !== 0 ? '&' : ''}${variable}=${encodeURIComponent(value)}`;
        return (queryString += variableString);
      } else {
        return queryString;
      }
    }, '?');
    return queryString;
  };

  const formatJsonString = (obj, key, isDate = false) => {
    const json = (obj[key] = JSON.parse(obj[key]));
    for (const prop in json) {
      if (json.hasOwnProperty(prop)) {
        const value = json[prop];
        obj[prop] = isDate ? dayjs(value).format('YYYY-MM-DD') : value;
      }
    }

    delete obj[key];
    return obj;
  };

  const onSubmit = (data) => {
    if ('dates' in data) data = formatJsonString(data, 'dates', true);

    if ('guests' in data) data = formatJsonString(data, 'guests');

    const queryString = createQueryString(data);
    history.push(`search${queryString}`);
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit(onSubmit)}>
      <AutoCompleteSearch name="location" placeholder="Search Locations" suggestions={suggestions} register={register} />
      <DatePicker name="dates" register={register} />
      <input className="searchbar__price-input" type="number" name="price" placeholder="Price" ref={register} min="0" />
      <GuestsDropdown label="Guests" name="guests" register={register} />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
