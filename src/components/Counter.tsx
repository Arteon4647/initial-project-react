import { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

export const Counter = () => {
  const { counter, increase, decrease, reset } = useContext(CounterContext);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
