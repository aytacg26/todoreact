import React from 'react';
import Card from '../../UI/Card/Card';
import TodoItem from './TodoItem/TodoItem';
import { useSelector } from 'react-redux';
import TodoCount from './TodoCount';

const TodoList = () => {
  const { todos, currentFilter } = useSelector((state) => ({
    todos: state.todo.todos,
    currentFilter: state.todo.currentFilter,
  }));

  if (todos.length === 0) {
    return (
      <Card>
        <ul>
          <li
            style={{ textAlign: 'center', fontSize: 24, fontWeight: 600 }}
          >{`No ${
            currentFilter !== 'all' ? currentFilter : ''
          } todo exists.`}</li>
        </ul>
      </Card>
    );
  }

  return (
    <Card>
      <ul>
        <TodoCount currentFilter={currentFilter} todos={todos} />
        {todos.map((todo) => (
          <TodoItem
            title={todo.title}
            key={todo.id}
            id={todo.id}
            completed={todo.isCompleted}
            date={todo.dateAdded}
            target={todo.target}
            description={todo.description}
          />
        ))}
      </ul>
    </Card>
  );
};

export default TodoList;
