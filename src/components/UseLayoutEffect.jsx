import React, { useEffect, useLayoutEffect } from "react";

function UseLayoutEffect() {
  const ref = React.createRef();
  useLayoutEffect(() => {
    let box = ref.current;
    if (box.offsetWidth < 400) {
      box.style.backgroundColor = "red";
      box.style.transition = "transform 0.3s";
      box.style.transform = "translateX(100px)";
    }
  }, []);

  //useEffect flckers while loading it
  /* useEffect(() => {
    let box = ref.current;
    if (box.offsetWidth < 400) {
      box.style.backgroundColor = "red";
      box.style.transition = "transform 0.3s";
      box.style.transform = "translateX(100px)";
    }
  }, []); */
  return (
    <div ref={ref} style={{ width: "300px", height: "300px" }}>
      UseLayoutEffect {}
    </div>
  );
}

export default UseLayoutEffect;

// Synchronous Execution: It runs after React has applied updates but before the browser paints those updates to the screen.
//Performance Consideration: Since useLayoutEffect runs synchronously and blocks painting until it completes, use it cautiously, especially in large components. In most cases, useEffect should be preferred, as it runs asynchronously and doesn't block rendering.
