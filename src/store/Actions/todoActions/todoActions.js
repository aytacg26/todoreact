import {
  ADD_TODO,
  DELETE_TODO,
  FILTER_TODO,
  SET_STATUS,
  SEARCH_TODO,
} from '../../types';

export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo,
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
};

export const filterTodo = (value) => {
  return {
    type: FILTER_TODO,
    payload: value,
  };
};
export const setStatus = (todoId) => (dispatch, getState) => {
  const state = getState();
  const { currentFilter } = state.todo;

  dispatch({
    type: SET_STATUS,
    payload: todoId,
  });

  dispatch(filterTodo(currentFilter));
};

export const searchTodo = (text) => {
  return {
    type: SEARCH_TODO,
    payload: text,
  };
};
