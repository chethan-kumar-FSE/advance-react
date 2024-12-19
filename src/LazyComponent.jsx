// src/components/LazyComponent/LazyComponent.js
import React, { useState, useEffect, Suspense, useRef } from "react";
import { useInView } from "react-intersection-observer";

const LazyComponent = ({ importFunc, label, placeholderHeight }) => {
  const [Component, setComponent] = useState(null);
  const [height, setHeight] = useState(placeholderHeight);
  const componentRef = useRef();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && !Component) {
      importFunc().then((module) => {
        setComponent(() => module.default);
      });
    }
  }, [inView, Component, importFunc]);

  useEffect(() => {
    if (Component && componentRef.current) {
      // Adjust the height based on the loaded component's height
      const componentHeight = componentRef.current.clientHeight;
      setHeight(componentHeight);
    }
  }, [Component]);

  return (
    <div ref={ref} style={{ minHeight: height, marginBottom: "20px" }}>
      {Component ? (
        <Suspense fallback={<div>Loading {label}...</div>}>
          <div ref={componentRef}>
            <Component />
          </div>
        </Suspense>
      ) : (
        <div>Loading {label}...</div>
      )}
    </div>
  );
};

export default LazyComponent;

const App = () => {
  return (
    <React.Fragment>
      <LazyComponent
        label="Home"
        importFunc={() => import("./Home")}
        placeholderHeight="100vh"
      />
      <LazyComponent
        label="About"
        importFunc={() => import("./Contact")}
        placeholderHeight="100vh"
      />
      <LazyComponent
        label="About"
        importFunc={() => import("./About")}
        placeholderHeight="100vh"
      />
    </React.Fragment>
  );
};
