import React, { useState } from 'react';

const AutoCompleteSearch = ({ name, suggestions, placeholder, register }) => {
  const [searchValue, setSearchValue] = useState('');
  const [showSuggestions, setShowSuggestions] = useState('');
  const startsWithSearchValue = `\^${searchValue.toLowerCase()}`;

  const onSearch = (event) => {
    const inputValue = event.target.value;
    setShowSuggestions(inputValue ? true : false);
    setSearchValue(inputValue);
  };

  const onSuggestionClick = (event) => {
    setSearchValue(event.target.innerText);
    setShowSuggestions(false);
  };

  const suggestionsMarkup = suggestions
    .filter((suggestion) => suggestion.toLowerCase().match(startsWithSearchValue))
    .map((suggestion, index) => (
      <li className="autocomplete-search__suggestion" key={`${suggestion}-${index}`} onClick={onSuggestionClick}>
        {suggestion}
      </li>
    ));

  const suggestionsToShow = suggestionsMarkup.length ? suggestionsMarkup : <li className="autocomplete-search__suggestion">No location by that name</li>;

  return (
    <div className="autocomplete-search">
      <input
        className="autocomplete-search__input"
        type="search"
        autoComplete="off"
        name={name}
        placeholder={placeholder}
        onChange={onSearch}
        value={searchValue}
        ref={register}
      />
      {showSuggestions && <ul className="autocomplete-search__suggestions">{suggestionsToShow}</ul>}
    </div>
  );
};

export default AutoCompleteSearch;
