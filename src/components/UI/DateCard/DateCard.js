import React from 'react';
import classes from './DateCard.module.css';

const DateCard = ({ date }) => {
  const dateForm = new Date(date);
  const day = Intl.DateTimeFormat('en-US', { day: '2-digit' }).format(dateForm);
  const month = Intl.DateTimeFormat('en-US', { month: 'long' }).format(
    dateForm
  );

  const year = dateForm.getFullYear();

  return (
    <div className={classes.DateCard}>
      <span className={classes.Day}>{day}</span>
      <span className={classes.Month}>{month}</span>
      <span className={classes.Year}>{year}</span>
    </div>
  );
};

export default React.memo(DateCard);
