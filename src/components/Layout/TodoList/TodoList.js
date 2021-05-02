import React from 'react';
import Card from '../../UI/Card/Card';
import TodoItem from './TodoItem/TodoItem';

const TodoList = ({ todos }) => {
  return (
    <Card>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            title={todo.title}
            key={todo.id}
            completed={todo.isCompleted}
            date={todo.dateAdded}
          />
        ))}
      </ul>
    </Card>
  );
};

export default TodoList;
