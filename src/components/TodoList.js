import React from "react";

function TodoItem({ todo, onComplete }) {
  return (
    <li>
      <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.text}
      </span>
      {!todo.completed && (
        <button onClick={onComplete}>Complete</button>
      )}
    </li>
  );
}


export default TodoList;
