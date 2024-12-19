import React from "react";
import { useUserData } from "../context/PerformantContext";

function Test2() {
  console.log("rendered-test2");
  const { setUsers, user } = useUserData();
  return (
    <div>
      <p>renfering rfom the tets</p>
      <button onClick={() => setUsers()}>setUser noiw</button>
      <b>{user?.name || "rockers"}</b>
    </div>
  );
}

export default Test2;
