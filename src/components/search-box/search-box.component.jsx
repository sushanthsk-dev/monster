import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    // onChange is synthetic event that we use whenever that DOM event happends
    onChange={handleChange}
  />
);
