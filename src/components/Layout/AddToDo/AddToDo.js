import React, { lazy, useState, useCallback, useRef, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import classes from './AddTodo.module.css';
import TextArea from '../../UI/TextArea/TextArea';
import { addTodo } from '../../../store/Actions/todoActions/todoActions';
import { setAlert } from '../../../store/Actions/ModalActions/modalActions';
import Loader from '../../UI/Loader/Loader';

const TodoFilter = lazy(() => import('./TodoFilter/TodoFilter'));

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

    if (
      inputValue.title.trim().length !== 0 &&
      inputValue.target.trim().length !== 0 &&
      description.trim().length !== 0
    ) {
      const currentDate = new Date();

      //Sanitize the data from user (especially description part is important, it comes from contentEditable element and also may contain upto 180 chars)
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
    } else {
      if (
        inputValue.title.trim().length === 0 &&
        inputValue.target.trim().length === 0 &&
        description.trim().length === 0
      ) {
        dispatch(
          setAlert(
            'Empty Form',
            'Title, Target and Description for TODO is required. Please enter title for subject, target for todo and description of todo.'
          )
        );
      } else if (inputValue.title.trim().length === 0) {
        dispatch(
          setAlert(
            'No Subject',
            'For todo subject, please enter the title. It is required.'
          )
        );
      } else if (inputValue.target.trim().length === 0) {
        dispatch(
          setAlert('No Target', 'Please enter your target for this TODO')
        );
      } else if (description.trim().length === 0) {
        dispatch(
          setAlert(
            'No Description',
            'Please describe this todo, write something about it. What it is about, why you must do it etc.'
          )
        );
      }
    }
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
          isrequired
          maxLength={30}
        />

        <Input
          type='text'
          placeholder='Target'
          value={inputValue.target}
          onChange={handleInputChange}
          name='target'
          isrequired
          maxLength={60}
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

      {showFilter && (
        <Suspense fallback={<Loader />}>
          <TodoFilter />
        </Suspense>
      )}
    </form>
  );
};

export default AddToDo;
