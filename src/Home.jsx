import React from "react";
import { Await, useLoaderData } from "react-router";

function Home() {
  const { post1, post2 } = useLoaderData();
  return (
    <div style={{ width: "100vw", height: "100vh", background: "red" }}>
      Home
      <div>
        <Await
          resolve={post1}
          children={(data) => {
            return <div>{JSON.stringify(data)}</div>;
          }}
        />
        {/* // {JSON.stringify(post2)} */}
      </div>
      <div>
        <div>
          {Array.from({ length: 10 }).map((_, index) => {
            return <div key={index}>{index}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
