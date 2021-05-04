import React from 'react';
import classes from './TodoCount.module.css';

const TodoCount = ({ currentFilter, todos }) => {
  return (
    <li className={classes.TodoCount}>
      <span className={classes.CountLabel}>
        {currentFilter === 'all'
          ? 'Total number of todos : '
          : `Total number of ${currentFilter} todos : `}
      </span>
      <span className={classes.Count}>{todos.length}</span>
    </li>
  );
};

export default TodoCount;
