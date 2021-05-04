import React from 'react';
import Card from '../../UI/Card/Card';
import TodoItem from './TodoItem/TodoItem';
import { useSelector } from 'react-redux';

const TodoList = () => {
  const { todos } = useSelector((state) => ({
    todos: state.todo.todos,
  }));

  return (
    <Card>
      <ul>
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
