import { useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  const handlechange = (value) => {
    if (counter < 0) {
      return;
    }
    setCounter(counter + value);
  };
  return (
    <div className="App">
      <h1>Counter Assignment</h1>
      <h2>counter:{counter}</h2>
      <button
        onClick={() => {
          handlechange(1);
        }}
      >
        ADD
      </button>
      <button
        onClick={() => {
          handlechange(-1);
        }}
      >
        SUB
      </button>
      <button
        onClick={() => {
          handlechange(2);
        }}
      >
        Double
      </button>
    </div>
  );
}
