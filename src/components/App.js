import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";

const App = () => {
  // parent state
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Practice Lifting State Up", completed: false },
    { id: 3, text: "Build a Todo App", completed: false }
  ]);

  // function to mark todo as complete
  const handleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Parent Component</h1>
      <h2>Chaild Component</h2>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
