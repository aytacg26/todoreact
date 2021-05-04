import React, { useState, lazy, Suspense, useCallback } from 'react';
import Button from '../../../UI/Button/Button';
import Card from '../../../UI/Card/Card';
import DateCard from '../../../UI/DateCard/DateCard';
import classes from './TodoItem.module.css';
import { useDispatch } from 'react-redux';
import {
  deleteTodo,
  setStatus,
} from '../../../../store/Actions/todoActions/todoActions';
import Loader from '../../../UI/Loader/Loader';
import PropTypes from 'prop-types';

const TodoDetails = lazy(() => import('./TodoDetails'));

const TodoItem = ({ id, title, completed, date, target, description }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleDetails = useCallback(() => {
    setShowDetails((prevState) => !prevState);
  }, []);

  const dispatch = useDispatch();

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
              onClick={() => dispatch(setStatus(id))}
            >
              {completed ? 'Incompleted' : 'Completed'}
            </Button>
            <Button color='blue' onClick={handleDetails}>
              {!showDetails ? 'Show' : 'Hide'} Details
            </Button>
            <Button color='red' onClick={() => dispatch(deleteTodo(id))}>
              Delete
            </Button>
          </div>
        </div>

        {showDetails && (
          <Suspense fallback={<Loader />}>
            <TodoDetails
              target={target}
              description={description}
              completed={completed}
              id={id}
            />
          </Suspense>
        )}
      </Card>
    </li>
  );
};

TodoItem.propTypes = {
  id: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  date: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default TodoItem;
