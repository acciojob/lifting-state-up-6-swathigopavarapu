// TodoList.js
import React from "react";

function TodoList({ todos, onComplete }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <li key={todo.id} style={{ marginBottom: "10px" }}>
          {todo.completed ? (
            // Completed todo
            <span style={{ marginRight: "10px", textDecoration: "line-through" }}>
              {todo.text}
            </span>
          ) : (
            // Active todo with button
            <>
              <span style={{ marginRight: "10px" }}>{todo.text}</span>
              <button onClick={() => onComplete(todo.id)}>Complete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
