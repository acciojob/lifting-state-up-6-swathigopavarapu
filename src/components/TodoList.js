import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onComplete }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} onComplete={() => onComplete(index)} />
      ))}
    </ul>
  );
}

export default TodoList;
