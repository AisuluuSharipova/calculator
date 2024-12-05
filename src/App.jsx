import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState(""); // State to manage calculator input

  // Function to handle button clicks
  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput(""); // Clear input
    } else if (value === "=") {
      try {
        setInput(eval(input).toString()); // Evaluate input and update state
      } catch {
        setInput("Error"); // Handle invalid inputs
      }
    } else {
      setInput((prev) => prev + value); // Concatenate input
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div> {/* Display input */}
      <div className="buttons">
        {/* Digit Buttons */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((digit) => (
          <button key={digit} onClick={() => handleButtonClick(digit.toString())}>
            {digit}
          </button>
        ))}
        {/* Operator Buttons */}
        {["+", "-", "*", "/"].map((operator) => (
          <button
            key={operator}
            onClick={() => handleButtonClick(operator)}
          >
            {operator}
          </button>
        ))}
        <button onClick={() => handleButtonClick("=")}>=</button>
        <button onClick={() => handleButtonClick("C")}>C</button>
      </div>
    </div>
  );
}

export default App;
