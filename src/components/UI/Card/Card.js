import React from 'react';
import classes from './Card.module.css';
import PropTypes from 'prop-types';

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

Card.propTypes = {
  row: PropTypes.bool,
  column: PropTypes.bool,
  center: PropTypes.bool,
  children: PropTypes.node,
};

export default Card;
