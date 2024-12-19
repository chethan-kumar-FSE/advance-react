import React, { useEffect, useRef } from "react";

function Refing() {
  const ref = useRef({ jings: 1 });
  useEffect(() => {
    //console.log(ref);
    /* ref?.current?.value = "jai";
    ref?.current?.style.border = "2px solid red"; */
    // ref?.current.style.outline="2px solid red"
  }, []);

  const handleOnInput = (e) => {
    const { type, value } = e.target;
    ref.current = { inputValue: value, length: value.length };
  };

  const display = () => {
    for (let key in ref.current) {
      if (key === "length") {
        console.log("length of keyword is ", ref.current[key]);
        break;
      }
    }
  };
  return (
    <div>
      <input type="text" onChange={(e) => handleOnInput(e)} />
      <button onClick={() => display()}>click to ses me</button>
    </div>
  );
}

export default Refing;
