import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([
    { text: "Learn React", completed: false },
    { text: "Write Tests", completed: false }
  ]);

  const handleComplete = (index) => {
    const updated = [...todos];
    updated[index].completed = true;   // ✅ mark todo as completed
    setTodos(updated);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoList todos={todos} onComplete={handleComplete} />
    </div>
  );
}

export default App;
