import React from 'react';
import Button from '../../../UI/Button/Button';
import Card from '../../../UI/Card/Card';
import DateCard from '../../../UI/DateCard/DateCard';
import classes from './TodoItem.module.css';

const TodoItem = ({ title, completed, date }) => {
  return (
    <li>
      <Card>
        <div className={classes.TodoBand}>
          <div className={classes.DateSection}>
            <DateCard date={date} />
          </div>
          <div className={classes.title}>{title}</div>
          {completed ? (
            <div className={classes.completedMark}>&#10003;</div>
          ) : (
            <div className={classes.completedMark}></div>
          )}
          <div className={classes.Actions}>
            <Button color='green'>Completed</Button>
            <Button color='blue'>Show Details</Button>
            <Button color='red'>Delete</Button>
          </div>
        </div>
        <div className={classes.Details}>
          <div>Target</div>
          <div>Description</div>
          <div>Completed Mark</div>
        </div>
      </Card>
    </li>
  );
};

export default TodoItem;

/**
 *   {
    id: 'todo-12125',
    title: 'Learn TypeScript',
    description: 'I will try to learn typescript within 1 month',
    dateAdded: '2017-07-01',
    target: 'learn within 1 month',
    isCompleted: true,
  },
 */
