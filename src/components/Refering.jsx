import React, { useCallback, useRef, useState } from "react";
import { Input } from "./Input";
import Dummy from "./Dummy";

function Refering() {
  /* const ref = useRef();

  const onChangeHandler = (e) => {
    console.log(e.target.value);
  }; */
  const [count, setCount] = useState(0);

  const displayCount = useCallback(() => {
    console.log("the fucking coutn is", count);
  }, [count]);

  return (
    <div>
      {/* <Input
        type={"text"}
        placeholder={"Enter something"}
        onChangeHandler={onChangeHandler}
        ref={ref}
      /> */}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click{count}
      </button>
      <Dummy displayCount={displayCount} content="clichme" />
    </div>
  );
}

export default Refering;
