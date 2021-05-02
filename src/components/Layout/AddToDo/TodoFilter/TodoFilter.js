import React from 'react';
import Radio from '../../../UI/Radio/Radio';
import classes from './TodoFilter.module.css';

const TodoFilter = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className={classes.FilterToDo}>
      <Radio
        id='filter-check-all'
        value='all'
        onChange={handleChange}
        color='blue'
        label='All'
        name='filter-todo'
      />
      <Radio
        id='filter-check-completed'
        value='all'
        onChange={handleChange}
        color='blue'
        label='Completed'
        name='filter-todo'
      />
      <Radio
        id='filter-check-incomplete'
        value='all'
        onChange={handleChange}
        color='blue'
        label='Incomplete'
        name='filter-todo'
      />
    </div>
  );
};

export default TodoFilter;
