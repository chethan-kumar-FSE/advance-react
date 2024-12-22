import React, { useContext, useReducer } from "react";
import Counter from "./Counter";
import Display from "./Display";
const controlsReducer = (state, action) => {
  switch (action.type) {
    case "Increment": {
      return {
        count: state.count + 1,
      };
    }
    case "Decrement": {
      return {
        count: state.count - 1,
      };
    }
    default:
      throw new Error("Please pass a valid action");
  }
};

const StateContext = React.createContext();
const DispatchContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(controlsReducer, { count: 0 });
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export const useCounterState = () => useContext(StateContext);
export const useCounterDispatch = () => useContext(DispatchContext);

export const PerformantContext = () => {
  return (
    <React.Fragment>
      <ContextProvider>
        <Counter />
        <Display />
      </ContextProvider>
    </React.Fragment>
  );
};
