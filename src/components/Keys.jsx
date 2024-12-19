import React, { useState } from "react";
export const Counter = () => {
  const [state, setState] = useState(0);
  console.log("redering");
  return (
    <React.Fragment>
      <button onClick={() => setState((prevCount) => prevCount + 1)}>+</button>
      <p>{state}</p>
      <button onClick={() => setState((prevCount) => prevCount - 1)}>-</button>
    </React.Fragment>
  );
};

const App = () => {
  const [state, setState] = useState(false);
  return (
    <>
      {/* pass different keys to completely re-render the counter component */}
      {state ? <Counter key={"shoes"} /> : <Counter key={"shirts"} />}

      {/* on state change the input also re-renders if keys are given to it */}
      <input type="text" key={state ? "shoesNumber" : "shirtsNumber"} />
      <button onClick={() => setState((prevState) => !prevState)}>
        toggle
      </button>
    </>
  );
};
