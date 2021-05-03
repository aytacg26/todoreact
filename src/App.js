import { useState } from 'react';
import './App.css';
import AddToDo from './components/Layout/AddToDo/AddToDo';
import TodoList from './components/Layout/TodoList/TodoList';
import Search from './components/UI/Search/Search';

const DUMMY_TODO = [
  {
    id: 'todo-42031',
    title: 'Add Search Todo functionality',
    description:
      'For todo react app, a search functionality will be added and user will be able to search or filter todos according to date, title or contents',
    dateAdded: '2021-05-04',
    target: 'Make full functional search',
    isCompleted: false,
  },
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

  const handleComplete = (todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId
          ? { ...todo, isCompleted: todo.isCompleted ? false : true }
          : todo
      )
    );
  };
  const handleDelete = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  const handleTodoFilter = (e) => {
    const filterType = e.target.value;

    switch (filterType) {
      case 'completed':
        setTodos(DUMMY_TODO.filter((todo) => todo.isCompleted));
        break;

      case 'incomplete':
        setTodos(DUMMY_TODO.filter((todo) => !todo.isCompleted));
        break;

      default:
        setTodos(DUMMY_TODO);
        break;
    }
  };

  return (
    <div className='container'>
      {showFilter && <Search placeholder='Search ToDo' />}
      <AddToDo
        toggleFilter={toggleFilter}
        showFilter={showFilter}
        addToList={addNewToDo}
        onTodoFilter={handleTodoFilter}
      />
      <TodoList
        todos={todos}
        onComplete={handleComplete}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;
