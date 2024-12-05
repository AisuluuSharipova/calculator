import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0"); 

  return (
    <div className="calculator">
      <div className="display">{display}</div>

      <div className="buttons">
        <button className="clear">C</button>
        <button className="default">( )</button>
        <button className="percent">%</button>
        <button className="operator">/</button>

        <button className="number">7</button>
        <button className="number">8</button>
        <button className="number">9</button>
        <button className="operator">*</button>

        <button className="number">4</button>
        <button className="number">5</button>
        <button className="number">6</button>
        <button className="operator">-</button>

        <button className="number">1</button>
        <button className="number">2</button>
        <button className="number">3</button>
        <button className="operator">+</button>

        <button className="default">+/-</button>
        <button className="number">0</button>
        <button className="number">,</button>
        <button className="equals">=</button>
      </div>
    </div>
  );
}

export default App;
