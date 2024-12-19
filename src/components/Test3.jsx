import React from "react";
import { useAuth } from "../context/PerformantContext";

function Test3() {
  console.log("rendered-test3");
  const { isLoggedIn } = useAuth();

  return (
    <div>
      Test3
      <b>{isLoggedIn ? "loggediunb" : "not loggedin"}</b>
    </div>
  );
}

export default Test3;
