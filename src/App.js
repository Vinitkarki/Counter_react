import { useState, useEffect } from "react";
import CounterComponent from "./CounterComponent";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log(count);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
    if (count === 0) {
      setError("");
    }
  };

  const decrement = () => {
    if (count === 0) {
      setError("Error : Cannot go below 0");
    } else {
      setCount(count - 1);
    }
  };

  const restart = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <CounterComponent num={count} />
      <p className="error">{error}</p>
      <button onClick={decrement} className="btn btn-left">
        Decrement
      </button>
      <button onClick={increment} className="btn">
        Increment
      </button>
      {count > 10 && (
        <button onClick={restart} className="restart">
          Go Back to 0
        </button>
      )}
    </div>
  );
}
