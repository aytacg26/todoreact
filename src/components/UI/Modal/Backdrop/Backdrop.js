import React from 'react';
import classes from './Backdrop.module.css';
import PropTypes from 'prop-types';

const Backdrop = ({ onClick, active }) => {
  const backdropClass = active
    ? `${classes.Backdrop} ${classes.Show}`
    : classes.Backdrop;

  return <div className={backdropClass} onClick={onClick}></div>;
};

Backdrop.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};

export default Backdrop;
