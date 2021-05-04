import React, { Fragment, useState } from 'react';
import Search from '../../UI/Search/Search';
import AddToDo from '../AddToDo/AddToDo';
import TodoList from '../TodoList/TodoList';
import { useDispatch } from 'react-redux';
import { searchTodo } from '../../../store/Actions/todoActions/todoActions';

const Todo = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const toggleFilter = () => {
    setShowFilter((prevState) => !prevState);
  };

  const handleSearchChange = (e) => {
    const entered = e.target.value;

    setSearch(entered);

    dispatch(searchTodo(entered));
  };
  return (
    <Fragment>
      {showFilter && (
        <Search
          placeholder='Search ToDo'
          onChange={handleSearchChange}
          value={search}
        />
      )}
      <AddToDo toggleFilter={toggleFilter} showFilter={showFilter} />
      <TodoList />
    </Fragment>
  );
};

export default Todo;
