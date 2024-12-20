import React from "react";
import { useLoaderData } from "react-router";

function Page2() {
  const data = useLoaderData();
  console.log("data", data);
  return <div>Page2</div>;
}

export default Page2;
