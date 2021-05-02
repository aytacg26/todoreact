import React from 'react';
import classes from './Search.module.css';

const Search = ({ onChange, value, placeholder }) => {
  return (
    <div className={classes.Search}>
      <input
        type='search'
        placeholder={placeholder}
        maxLength='30'
        name='search'
        onChange={onChange}
        value={value}
        autoComplete='off'
      />
    </div>
  );
};

export default Search;
