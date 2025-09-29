import React from "react";

function TodoItem({ todo, onComplete }) {
  return (
    <li>
      {todo.text}
      <button onClick={() => onComplete(todo.id)}>Complete</button>
    </li>
  );
}


export default TodoItem;
