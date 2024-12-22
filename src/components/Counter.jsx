import React from "react";
import { useCounterDispatch } from "./ContextApi1";

function Counter() {
  const dispatch = useCounterDispatch();
  console.log("rendering cost-from buttons");
  return (
    <React.Fragment>
      <button onClick={() => dispatch({ type: "Increment" })}>+</button>
      <button onClick={() => dispatch({ type: "Decrement" })}>--</button>
    </React.Fragment>
  );
}

export default Counter;
