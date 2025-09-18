import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";

const steps = [
  "Learn React",
  "Build a React app",
  "Deploy the React app",
];
const App = () => {
  const [completed, setCompleted] = useState(Array(steps.length).fill(false));
  const handleComplete = (index) => {
    const updated = [...completed];
    updated[index] = true;
    if (index === steps.length - 1) {
      setCompleted(Array(steps.length).fill(false));
    } else {
      setCompleted(updated);
    }
  };
  return (
    <div>
      <h1>Parent Component</h1>
      <h2>Child Component</h2>
      <TodoList steps={steps} completed={completed} onComplete={handleComplete} />
    </div>
  );
};
export default App;
