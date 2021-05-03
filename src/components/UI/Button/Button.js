import React, { useState, useEffect } from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  const [isActive, setActive] = useState(false);
  const { color } = props;

  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
    setActive(true);
  };

  useEffect(() => {
    let timer;

    if (isActive) {
      timer = setTimeout(() => {
        setActive(false);
      }, 300);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isActive]);

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

export default React.memo(Button);
