import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onComplete }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <li key={todo.id} style={{ marginBottom: "10px" }}>
          <span
            style={{
              marginRight: "10px",
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
          </span>

          {/* Only show button if todo is NOT completed */}
          {!todo.completed && (
            <button onClick={() => onComplete(todo.id)}>Complete</button>
          )}
        </li>
      ))}
    </ul>
  );
}


export default TodoList;
