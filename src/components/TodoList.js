import React from "react";

function TodoList({ todos, onComplete }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <li key={todo.id} style={{ marginBottom: "10px" }}>
          <span style={{ marginRight: "10px" }}>{todo.text}</span>

          {/* Show Complete button only if not completed */}
          {!todo.completed && (
            <button onClick={() => onComplete(todo.id)}>Complete</button>
           
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
