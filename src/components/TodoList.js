import React from "react";
const TodoList = ({ steps, completed, onComplete }) => {
  return (
    <ul>
      {steps.map((step, index) => (
        <li key={index} style={{ marginBottom: "10px" }}>
          {step}
          {!completed[index] && (
            <button
              onClick={() => onComplete(index)}
              style={{ marginLeft: "10px" }}
            >
              Complete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
