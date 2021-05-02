import { useState } from 'react';
import './App.css';
import AddToDo from './components/Layout/AddToDo/AddToDo';
import TodoList from './components/Layout/TodoList/TodoList';
import Search from './components/UI/Search/Search';

const DUMMY_TODO = [
  {
    id: 'todo-12123',
    title: 'Learn React',
    description: 'I will try to learn react within 10 months',
    dateAdded: '2017-06-01',
    target: 'learn within 10 months',
    isCompleted: false,
  },
  {
    id: 'todo-12125',
    title: 'Learn TypeScript',
    description: 'I will try to learn typescript within 1 month',
    dateAdded: '2017-07-01',
    target: 'learn within 1 month',
    isCompleted: true,
  },
  {
    id: 'todo-12786',
    title: 'Learn Nodejs',
    description: 'I will try to learn nodejs within 12 months',
    dateAdded: '2017-07-06',
    target: 'learn within 12 months',
    isCompleted: true,
  },
];

const App = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [todos, setTodos] = useState(DUMMY_TODO);

  const toggleFilter = () => {
    setShowFilter((prevState) => !prevState);
  };

  const addNewToDo = (newTodo) => {
    setTodos((prevState) => [newTodo, ...prevState]);
  };

  return (
    <div className='container'>
      {showFilter && <Search placeholder='Search ToDo' />}
      <AddToDo
        toggleFilter={toggleFilter}
        showFilter={showFilter}
        addToList={addNewToDo}
      />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
