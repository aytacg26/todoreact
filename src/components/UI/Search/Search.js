import React from 'react';
import classes from './Search.module.css';

const Search = ({ onChange, onSearch, value, placeholder }) => {
  return (
    <form className={classes.Search} onSubmit={onSearch}>
      <input
        type='search'
        placeholder={placeholder}
        maxLength='30'
        name='search'
        onChange={onChange}
        value={value}
        autoComplete='off'
      />
    </form>
  );
};

export default Search;
