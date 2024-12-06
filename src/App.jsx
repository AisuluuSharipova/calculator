import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [expression, setExpression] = useState("");

  const handleNumberClick = (number) => {
    setExpression((prev) => prev + number);
  };

  const handleOperatorClick = (op) => {
    if (/[\+\-\*\/]$/.test(expression)) {
      setExpression((prev) => prev.slice(0, -1) + op);
    } else {
      setExpression((prev) => prev + op);
    }
  };

  const calculate = (expr) => {
    try {
      const result = eval(expr);
      return result.toString();
    } catch {
      return "Error";
    }
  };

  const handleEqualsClick = () => {
    if (expression && !/[\+\-\*\/]$/.test(expression)) {
      const result = calculate(expression);
      setExpression(result);
    } else {
      setExpression("Error");
    }
  };

  const handleClear = () => {
    setExpression("");
  };

  const handleDecimal = () => {
    const lastNumber = expression.split(/[\+\-\*\/]/).pop();
    if (!lastNumber.includes(".")) {
      setExpression((prev) => prev + ".");
    }
  };

  const handleDelete = () => {
    setExpression((prev) =>
      prev.length > 1 ? prev.slice(0, -1) : ""
    );
  };

  const handleBrackets = () => {
    const openCount = (expression.match(/\(/g) || []).length;
    const closeCount = (expression.match(/\)/g) || []).length;

    if (openCount === closeCount || /[\+\-\*\/\(]$/.test(expression)) {
      setExpression((prev) => prev + "(");
    } else {
      setExpression((prev) => prev + ")");
    }
  };

  const handlePlusMinus = () => {
    if (expression) {
      const lastNumberIndex = Math.max(
        expression.lastIndexOf("+"),
        expression.lastIndexOf("-"),
        expression.lastIndexOf("*"),
        expression.lastIndexOf("/")
      );
      const lastNumber = expression.slice(lastNumberIndex + 1);
      if (!lastNumber.startsWith("-")) {
        setExpression(
          expression.slice(0, lastNumberIndex + 1) + "-" + lastNumber
        );
      } else {
        setExpression(
          expression.slice(0, lastNumberIndex + 1) + lastNumber.slice(1)
        );
      }
    }
  };

  const handleKeyDown = (event) => {
    const { key } = event;

    if (!isNaN(key)) {
      handleNumberClick(key);
    } else if (["+", "-", "*", "/"].includes(key)) {
      handleOperatorClick(key);
    } else if (key === "Enter" || key === "=") {
      handleEqualsClick();
    } else if (key === "Backspace") {
      handleDelete();
    } else if (key === "Escape") {
      handleClear();
    } else if (key === ".") {
      handleDecimal();
    } else if (key === "(" || key === ")") {
      handleBrackets();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [expression]);

  return (
    <div className="calculator">
      <div className="display-wrapper">
        <div className="display">{expression || "0"}</div>
        <button className="delete" onClick={handleDelete}>
          ⌫
        </button>
      </div>

      <div className="buttons">
        <button className="clear" onClick={handleClear}>
          C
        </button>
        <button className="default" onClick={handleBrackets}>
          ( )
        </button>
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
          .
        </button>
        <button className="equals" onClick={handleEqualsClick}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
