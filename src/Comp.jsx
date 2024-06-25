import React, { memo } from "react";
import { logProps } from "./HOC/withProps";
function Comp({ minor }) {
  console.log(minor);
  return <div></div>;
}

export default logProps(Comp);
