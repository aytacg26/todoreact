import React from 'react';
import classes from './Card.module.css';

const Card = ({ children, row, column, center }) => {
  const cardClass = row
    ? `${classes.Card} ${classes.Row}`
    : column
    ? `${classes.Card} ${classes.Column}`
    : classes.Card;

  return (
    <div className={`${cardClass} ${center ? classes.Center : ''}`}>
      {children}
    </div>
  );
};

export default Card;
