import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  useState,
} from "react";

type AppContextType = {
  counter: number;
  setCounter?: Dispatch<number>;
};

export const AppContext = createContext<AppContextType>({
  counter: 0,
});

export const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <AppContext.Provider value={{ counter, setCounter }}>
      {children}
    </AppContext.Provider>
  );
};
