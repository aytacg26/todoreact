import React from 'react';
import classes from './Search.module.css';
import PropTypes from 'prop-types';

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

Search.defaultProps = {
  placeholder: 'Search...',
};

Search.propTypes = {
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
  value: PropTypes.any,
  placeholder: PropTypes.string,
};

export default Search;
