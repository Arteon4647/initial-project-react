import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  useState,
} from "react";

type CounterContextType = {
  counter: number;
  setCounter?: Dispatch<number>;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
};

export const CounterContext = createContext<CounterContextType>({
  counter: 0,
  increase: () => {},
  decrease: () => {},
  reset: () => {},
});

export const CounterContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [counter, setCounter] = useState<number>(0);
  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(0);
  };

  return (
    <CounterContext.Provider value={{ counter, increase, decrease, reset }}>
      {children}
    </CounterContext.Provider>
  );
};
