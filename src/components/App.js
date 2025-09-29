import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a React app", completed: false },
    { id: 3, text: "Deploy the React app", completed: false },
  ]);

  const handleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ?{ ...todo, completed: true } : todo
    );
    console.log("updatedTodos",updatedTodos)
    setTodos(updatedTodos);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>parent component</h1>
      <TodoList todos={todos} onComplete={handleComplete} />
    </div>
  );
}

export default App;
