import React from 'react';
import Input from '../../UI/Input/Input';
import classes from './AddTodo.module.css';

const AddToDo = (props) => {
  return (
    <form className={classes.AddTodo}>
      <Input />
    </form>
  );
};

export default AddToDo;
