import React, { useState } from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  const [isActive, setActive] = useState(false);
  const { color } = props;

  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
    setActive(true);
    const timer = setTimeout(() => {
      setActive(false);
      clearTimeout(timer);
    }, 300);
  };

  return (
    <div className={classes.btnContainer}>
      <button
        {...props}
        className={`${classes.btn} ${classes[color]}`}
        onClick={handleClick}
      >
        {props.children}
        <span
          className={
            isActive
              ? `${classes.slideEffect} ${classes.active}`
              : `${classes.slideEffect}`
          }
        ></span>
      </button>
    </div>
  );
};

Button.defaultProps = {
  color: 'blue',
};

export default Button;
