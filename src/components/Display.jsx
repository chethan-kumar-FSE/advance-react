import React from "react";
import { useCounterState } from "./ContextApi1";

function Display() {
  const { count } = useCounterState();

  console.log("rendering cost--display", count);
  return <div>{count}</div>;
}

export default Display;
