import { forwardRef } from 'react';
import classes from './Input.module.css';
import React from 'react';

const Input = (props, ref) => {
  const inputClass = props.type === 'text' ? classes.Input : '';

  return (
    <div className={inputClass}>
      <input {...props} ref={ref} />
    </div>
  );
};

export default forwardRef(Input);
