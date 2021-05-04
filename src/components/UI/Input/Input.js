import { useRef } from 'react';
import useValidate from './hook/inputCustomHook';
import classes from './Input.module.css';
import React from 'react';

const Input = (props) => {
  // const [isEmpty, setIsEmpty] = useState(false);
  const inputEl = useRef();
  const { isEmpty } = useValidate(inputEl, props.value);

  const inputClass =
    props.type === 'text'
      ? `${classes.Input} ${isEmpty && props.required ? classes.Required : ''}`
      : '';

  return (
    <div className={inputClass}>
      <input {...props} ref={inputEl} />
    </div>
  );
};

export default Input;
