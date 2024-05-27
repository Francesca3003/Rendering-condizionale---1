import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter({ initialValue, handlerCounterIncrement }) {
  const [counter, setCounter] = useState(initialValue);

  function handlerCounterIncrement() {
    setCounter(counter + 1);
  }
  function handlerCounterDecrement() {
    setCounter(counter - 1);
  }
  function handlerCounterReset() {
    setCounter(initialValue);
  }
  return (
    <div>
      <CounterDisplay counter={counter}></CounterDisplay>
      <button onClick={handlerCounterIncrement}>Increment</button>
      <button onClick={handlerCounterDecrement}>Decrement</button>
      <button onClick={handlerCounterReset}>Reset</button>
    </div>
  );
}
export default Counter;
