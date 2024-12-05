import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0"); 
  const [firstOperand, setFirstOperand] = useState(null); 
  const [operator, setOperator] = useState(null); 
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const handleNumberClick = (number) => {
    if (waitingForSecondOperand) {
      setDisplay(number);
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === "0" ? number : display + number); 
    }
  };

  const handleOperatorClick = (op) => {
    if (operator && waitingForSecondOperand) {
      setOperator(op); 
      return;
    }

    if (firstOperand === null) {
      setFirstOperand(parseFloat(display));
    } else if (operator) {
      const result = calculate(firstOperand, parseFloat(display), operator);
      setDisplay(String(result));
      setFirstOperand(result);
    }

    setOperator(op);
    setWaitingForSecondOperand(true);
  };

  const calculate = (a, b, op) => {
    switch (op) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return b !== 0 ? a / b : "Error";
      default:
        return b;
    }
  };

  const handleEqualsClick = () => {
    if (operator && !waitingForSecondOperand) {
      const result = calculate(firstOperand, parseFloat(display), operator);
      setDisplay(String(result));
      setFirstOperand(null);
      setOperator(null);
      setWaitingForSecondOperand(false);
    }
  };

  const handleClear = () => {
    setDisplay("0");
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const handlePlusMinus = () => {
    setDisplay((prev) => (prev.startsWith("-") ? prev.slice(1) : "-" + prev));
  };

  const handleDecimal = () => {
    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  return (
    <div className="calculator">
      <div className="display">{display}</div>

      <div className="buttons">
        <button className="clear" onClick={handleClear}>
          C
        </button>
        <button className="default">( )</button>
        <button className="percent">%</button>
        <button className="operator" onClick={() => handleOperatorClick("/")}>
          /
        </button>

        <button className="number" onClick={() => handleNumberClick("7")}>
          7
        </button>
        <button className="number" onClick={() => handleNumberClick("8")}>
          8
        </button>
        <button className="number" onClick={() => handleNumberClick("9")}>
          9
        </button>
        <button className="operator" onClick={() => handleOperatorClick("*")}>
          *
        </button>

        <button className="number" onClick={() => handleNumberClick("4")}>
          4
        </button>
        <button className="number" onClick={() => handleNumberClick("5")}>
          5
        </button>
        <button className="number" onClick={() => handleNumberClick("6")}>
          6
        </button>
        <button className="operator" onClick={() => handleOperatorClick("-")}>
          -
        </button>

        <button className="number" onClick={() => handleNumberClick("1")}>
          1
        </button>
        <button className="number" onClick={() => handleNumberClick("2")}>
          2
        </button>
        <button className="number" onClick={() => handleNumberClick("3")}>
          3
        </button>
        <button className="operator" onClick={() => handleOperatorClick("+")}>
          +
        </button>

        <button className="default" onClick={handlePlusMinus}>
          +/-
        </button>
        <button className="number" onClick={() => handleNumberClick("0")}>
          0
        </button>
        <button className="number" onClick={handleDecimal}>
          ,
        </button>
        <button className="equals" onClick={handleEqualsClick}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
