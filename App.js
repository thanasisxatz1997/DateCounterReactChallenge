import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date();
  console.log(count);
  console.log(date.toDateString());
  date.setDate(date.getDate() + count);
  console.log(date.toDateString());

  function handleCountChange(e, symbol) {
    e.preventDefault();
    symbol === "+" ? setCount((c) => c + step) : setCount((c) => c - step);
  }
  function resetStates() {
    setCount(0);
    setStep(1);
  }
  return (
    <>
      <form>
        <div>
          <input
            min={1}
            max={20}
            type="range"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          ></input>
          <span>{step}</span>
        </div>
        <div>
          <button onClick={(e) => handleCountChange(e, "-")}>-</button>
          <input
            type={"slider"}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          ></input>
          <button onClick={(e) => handleCountChange(e, "+")}>+</button>
        </div>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </form>
      <button onClick={resetStates}>Reset</button>
    </>
  );
}
