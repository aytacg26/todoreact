import classes from './Input.module.css';
import React from 'react';

const Input = (props) => {
  const inputClass = props.type === 'text' ? classes.Input : '';

  return (
    <div className={inputClass}>
      <input {...props} />
    </div>
  );
};

export default Input;
