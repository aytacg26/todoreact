import React from 'react';
import classes from './Radio.module.css';

const Radio = (props) => {
  return (
    <label htmlFor={props.id} className={classes.radio}>
      <span className={classes.radioInput}>
        <input type='radio' {...props} id={props.id} />
        <span className={classes.radioControl}></span>
      </span>
      <span className={classes.radioLabel}>{props.label}</span>
    </label>
  );
};

export default Radio;
