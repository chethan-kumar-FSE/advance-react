import React, { lazy, Suspense } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router";

import Home from "../Home";

const Page1 = lazy(() => import("./Page1"));
const Page2 = lazy(() => import("./Page2"));

/* const AsyncComponent = React.lazy(async () => {
  const component = await import("./SomeComponent");
  return { default: component.default };
}); */
async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
}

async function post1() {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${3}`
  );
  return response.json();
}
async function post2() {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${3}`
  );
  return response.json();
}
const Nav = () => (
  <>
    {" "}
    <Link to={"/"}>page1</Link>
    <Link to={"/page2"}>Page2</Link>
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Nav />
        <Home />
      </>
    ),
    loader: () => {
      return {
        post1: post1(),
        post2: post2(),
      };
    },
  },
  {
    path: "/page2",
    element: (
      <Suspense fallback={<p>loaidng...</p>}>
        <Nav></Nav>
        <Page1 />
      </Suspense>
    ),
  },
]);

export const AllRouter = () => (
  <RouterProvider router={router} /> // Use RouterProvider with the data router
);

function ContentLayout() {
  return (
    <div>
      <Nav />
      <Outlet /> {/* Content will be injected here */}
    </div>
  );
}

/* export const AsyncRouter = () => {
  return (
    <>
      <Suspense fallback={<p>Loaidng...</p>}>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </Suspense>
    </>
  );
}; */
