import React, { useState } from 'react';
import Input from '../Input/Input';
import classes from './Checkbox.module.css';

const CheckBox = ({ id, onChange, value, color, label, name }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((prevState) => !prevState);
  };

  return (
    <div className={classes.Checkbox}>
      <Input
        type='checkbox'
        id={id}
        onChange={onChange}
        value={value}
        name={name}
      />
      <label
        htmlFor={id}
        className={
          !show ? `${classes.check}` : `${classes.check} ${classes.checked}`
        }
        onClick={handleClick}
      ></label>
      <label htmlFor={id} className={classes.text} onClick={handleClick}>
        {label}
      </label>

      <span
        className={
          !show
            ? `${classes.mark} ${classes[color.toLowerCase()]}`
            : `${classes.mark} ${classes[color.toLowerCase()]} ${
                classes.checked
              }`
        }
      ></span>

      <span
        className={
          !show
            ? `${classes.markcenter}`
            : `${classes.markcenter} ${classes.checked}`
        }
      ></span>
    </div>
  );
};

CheckBox.defaultProps = {
  color: 'blue',
};

export default CheckBox;
