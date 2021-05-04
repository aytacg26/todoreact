import React from 'react';
import classes from './Backdrop.module.css';

const Backdrop = ({ onClick, active }) => {
  const backdropClass = active
    ? `${classes.Backdrop} ${classes.Show}`
    : classes.Backdrop;

  return <div className={backdropClass} onClick={onClick}></div>;
};

export default Backdrop;
