import React from 'react';
import Radio from '../../../UI/Radio/Radio';
import classes from './TodoFilter.module.css';
import { filterTodo } from '../../../../store/Actions/todoActions/todoActions';
import { useDispatch } from 'react-redux';

const TodoFilter = () => {
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    dispatch(filterTodo(e.target.value));
  };

  return (
    <div className={classes.FilterToDo}>
      <Radio
        id='filter-check-all'
        value='all'
        onChange={handleFilter}
        color='blue'
        label='All'
        name='filter-todo'
      />
      <Radio
        id='filter-check-completed'
        value='completed'
        onChange={handleFilter}
        color='blue'
        label='Completed'
        name='filter-todo'
      />
      <Radio
        id='filter-check-incomplete'
        value='incomplete'
        onChange={handleFilter}
        color='blue'
        label='Incomplete'
        name='filter-todo'
      />
    </div>
  );
};

export default TodoFilter;
