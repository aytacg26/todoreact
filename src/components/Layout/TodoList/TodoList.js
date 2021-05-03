import React from 'react';
import Card from '../../UI/Card/Card';
import TodoItem from './TodoItem/TodoItem';

const TodoList = ({ todos, onComplete, onDelete }) => {
  return (
    <Card>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            title={todo.title}
            key={todo.id}
            completed={todo.isCompleted}
            date={todo.dateAdded}
            target={todo.target}
            description={todo.description}
            onComplete={() => onComplete(todo.id)}
            onDelete={() => onDelete(todo.id)}
          />
        ))}
      </ul>
    </Card>
  );
};

export default TodoList;
