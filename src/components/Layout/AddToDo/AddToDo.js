import React, { useState } from 'react';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import classes from './AddTodo.module.css';
import TodoFilter from './TodoFilter/TodoFilter';

const AddToDo = (props) => {
  const [showFilter, setShowFilter] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTodo = () => {};
  const clearForm = () => {
    setInputValue('');
  };

  const toggleFilter = () => {
    setShowFilter((prevState) => !prevState);
  };

  return (
    <form className={classes.AddTodo}>
      <Input
        type='text'
        placeholder='Add New ToDo'
        value={inputValue}
        onChange={handleInputChange}
      />
      <div className={classes.Actions}>
        <Button color='blue' type='button' onClick={addTodo}>
          Add
        </Button>
        <Button color='red' type='button' onClick={clearForm}>
          Clear
        </Button>
        <Button color='orange' type='button' onClick={toggleFilter}>
          {showFilter ? 'Hide Filter' : 'Show Filter'}
        </Button>
      </div>

      {showFilter && <TodoFilter />}
    </form>
  );
};

export default AddToDo;
