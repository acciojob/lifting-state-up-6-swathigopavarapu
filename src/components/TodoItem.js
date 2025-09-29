import React from "react";

function TodoItem({ todo, index, onComplete }) {
  return (
    <li>
      <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.text}
      </span>
      {!todo.completed && (
        <button onClick={onComplete}>{index + 1}</button>   
      )}
    </li>
  );
}

export default TodoItem;
