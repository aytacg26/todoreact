import { useRef } from 'react';
import useValidate from './hook/inputCustomHook';
import classes from './Input.module.css';
import React from 'react';

const Input = (props) => {
  const inputEl = useRef();
  const { isEmpty } = useValidate(inputEl, props.value);

  //isrequired is not an attribute of input element and required attribute of input element prevents the work of alert
  //for this reason, isrequired used and to prevent error message of React, for DOM input element, new props object created
  //(a copy of props) and assigned to the DOM input element (inElProps => input element props, copy of props without isrequired)

  const inputClass =
    props.type === 'text'
      ? `${classes.Input} ${
          isEmpty && props.isrequired ? classes.Required : ''
        }`
      : '';

  const inElProps = { ...props };
  delete inElProps['isrequired'];

  return (
    <div className={inputClass}>
      <input {...inElProps} ref={inputEl} />
    </div>
  );
};

export default Input;
