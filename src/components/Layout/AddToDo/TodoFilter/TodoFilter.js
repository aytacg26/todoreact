import React from 'react';
import Radio from '../../../UI/Radio/Radio';
import classes from './TodoFilter.module.css';

const TodoFilter = ({ onFilter }) => {
  return (
    <div className={classes.FilterToDo}>
      <Radio
        id='filter-check-all'
        value='all'
        onChange={onFilter}
        color='blue'
        label='All'
        name='filter-todo'
      />
      <Radio
        id='filter-check-completed'
        value='completed'
        onChange={onFilter}
        color='blue'
        label='Completed'
        name='filter-todo'
      />
      <Radio
        id='filter-check-incomplete'
        value='incomplete'
        onChange={onFilter}
        color='blue'
        label='Incomplete'
        name='filter-todo'
      />
    </div>
  );
};

export default TodoFilter;
