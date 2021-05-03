import React, { useState } from 'react';
import Button from '../../../UI/Button/Button';
import Card from '../../../UI/Card/Card';
import DateCard from '../../../UI/DateCard/DateCard';
import classes from './TodoItem.module.css';

const TodoItem = ({
  title,
  completed,
  date,
  target,
  description,
  onComplete,
  onDelete,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleDetails = () => {
    setShowDetails((prevState) => !prevState);
  };

  return (
    <li>
      <Card column center>
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
            <Button
              color={!completed ? 'green' : 'orange'}
              onClick={onComplete}
            >
              {completed ? 'Incompleted' : 'Completed'}
            </Button>
            <Button color='blue' onClick={handleDetails}>
              {!showDetails ? 'Show' : 'Hide'} Details
            </Button>
            <Button color='red' onClick={onDelete}>
              Delete
            </Button>
          </div>
        </div>

        {showDetails && (
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
        )}
      </Card>
    </li>
  );
};

export default TodoItem;
