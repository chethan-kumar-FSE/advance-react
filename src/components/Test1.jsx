import React from "react";
import { useAuth } from "../context/PerformantContext";

function Test1() {
  console.log("rendered-test1");
  const { setLoggedIn } = useAuth();
  return (
    <div>
      <button onClick={() => setLoggedIn()}>setdetails</button>
    </div>
  );
}

export default Test1;
