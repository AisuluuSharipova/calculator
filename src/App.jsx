import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("0");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("0");
    } else if (value === "+/-") {
      setInput((prev) => (parseFloat(prev) * -1).toString());
    } else if (value === "%") {
      setInput((prev) => (parseFloat(prev) / 100).toString());
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput((prev) => (prev === "0" ? value : prev + value));
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        {["C", "()", "%", "/"].map((op) => (
          <button
            key={op}
            className="operator"
            onClick={() => handleButtonClick(op)}
          >
            {op}
          </button>
        ))}
        {["7", "8", "9", "*"].map((value) => (
          <button
            key={value}
            className="number"
            onClick={() => handleButtonClick(value)}
          >
            {value}
          </button>
        ))}
        {["4", "5", "6", "-"].map((value) => (
          <button
            key={value}
            className="number"
            onClick={() => handleButtonClick(value)}
          >
            {value}
          </button>
        ))}
        {["1", "2", "3", "+"].map((value) => (
          <button
            key={value}
            className="number"
            onClick={() => handleButtonClick(value)}
          >
            {value}
          </button>
        ))}
        {["+/-", "0", ",", "="].map((value) => (
          <button
            key={value}
            className={value === "=" ? "operator equals" : "number"}
            onClick={() => handleButtonClick(value)}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
