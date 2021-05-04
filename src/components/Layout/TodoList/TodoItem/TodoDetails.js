import React, { Fragment } from 'react';
import classes from './TodoItem.module.css';

const TodoDetails = ({ target, description, completed }) => {
  return (
    <Fragment>
      <div className={classes.Details}>
        <div className={classes.Content}>
          <div className={classes.Target}>
            <label className={classes.Label}>Target : </label>
            <span>{target}</span>
          </div>
          <span className={classes.Description}>{description}</span>
          <div className={classes.Status}>
            {' '}
            <label className={classes.Label}>Status :</label>
            {completed ? (
              <div className={classes.completedMark}>&#10003;</div>
            ) : (
              <div className={classes.incompleteMark}>&#10060;</div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TodoDetails;
