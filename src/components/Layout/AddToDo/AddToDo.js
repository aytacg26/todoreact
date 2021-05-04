import React, { useState, useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import classes from './AddTodo.module.css';
import TodoFilter from './TodoFilter/TodoFilter';
import TextArea from '../../UI/TextArea/TextArea';
import { addTodo } from '../../../store/Actions/todoActions/todoActions';

const AddToDo = ({ toggleFilter, showFilter }) => {
  const [inputValue, setInputValue] = useState({ title: '', target: '' });
  const [description, setDescription] = useState('');
  const textAreaRef = useRef();

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleTextValue = (text) => {
    setDescription(text.trim());
  };

  const clearForm = useCallback(() => {
    setInputValue({ title: '', target: '' });
    setDescription('');
    textAreaRef.current.innerText = '';
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    //Sanitize the data from user (especially description part is important, it comes from contentEditable element and also may contain upto 180 chars)
    const currentDate = new Date();

    const newTodo = {
      id: `todo-${currentDate.getTime()}-${currentDate.getFullYear()}`,
      title: inputValue.title,
      description,
      dateAdded: currentDate.toLocaleDateString(),
      target: inputValue.target,
      isCompleted: false,
    };

    dispatch(addTodo(newTodo));

    clearForm();
  };

  return (
    <form className={classes.AddTodo} onSubmit={handleSubmit}>
      <div className={classes.InputArea}>
        <Input
          type='text'
          placeholder='TODO Title'
          value={inputValue.title}
          onChange={handleInputChange}
          name='title'
        />

        <Input
          type='text'
          placeholder='Target'
          value={inputValue.target}
          onChange={handleInputChange}
          name='target'
        />
      </div>
      <TextArea
        maxLength={180}
        counterText='remaining'
        value={description}
        showCounter
        placeHolder='Description'
        name='description'
        onChange={handleTextValue}
        ref={textAreaRef}
      />

      <div className={classes.Actions}>
        <Button color='blue' type='submit'>
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
