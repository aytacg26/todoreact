import React, { Fragment, lazy, Suspense, useState, useCallback } from 'react';

import AddToDo from '../AddToDo/AddToDo';
import TodoList from '../TodoList/TodoList';
import { useDispatch } from 'react-redux';
import { searchTodo } from '../../../store/Actions/todoActions/todoActions';
import Loader from '../../UI/Loader/Loader';
const Search = lazy(() => import('../../UI/Search/Search'));

const Todo = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const toggleFilter = useCallback(() => {
    setShowFilter((prevState) => !prevState);
  }, []);

  const handleSearchChange = (e) => {
    const entered = e.target.value;

    setSearch(entered);

    dispatch(searchTodo(entered));
  };
  return (
    <Fragment>
      {showFilter && (
        <Suspense fallback={<Loader />}>
          <Search
            placeholder='Search ToDo'
            onChange={handleSearchChange}
            value={search}
          />
        </Suspense>
      )}
      <AddToDo toggleFilter={toggleFilter} showFilter={showFilter} />
      <TodoList />
    </Fragment>
  );
};

export default Todo;
