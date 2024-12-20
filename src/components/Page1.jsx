import React, { Suspense } from "react";
import { useLoaderData } from "react-router";
import { Await } from "react-router";

async function fetchPostDetail() {
  // Simulating a delay for fetching data
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        const data = await response.json();
        resolve(data); // Return the fetched data
      } catch (error) {
        reject(error); // Reject if there’s an error
      }
    }, 3000);
  });
}
function Page1() {
  return (
    <div>
      <h1>Page 2</h1>
      <p>
        This page content is rendered immediately, even while data is being
        fetched.
      </p>

      <Suspense fallback={<p>Loading post data...</p>}>
        {/* Await component will resolve the data */}
        {/*  */}
        <Await
          resolve={fetchPostDetail()}
          errorElement={<p>Could not fetch post data</p>}
        >
          {(value) => {
            // Once data is resolved, render the value
            return <div>{JSON.stringify(value)}</div>;
          }}
        </Await>
      </Suspense>
    </div>
  );
}

//Await component waits for the API data to be resolved
//the static data get rendered immediately , but the API dependent data UI part will not render until the data is resolved
export default Page1;
