import React from "react";
export const EventListener = () => {
  return (
    <React.Fragment>
      <div
        onClickCapture={() => {
          console.log("Outer-dev clicked");
        }}
        style={{
          width: "200px",
          height: "200px",
          background: "red",
          paddingTop: "20px",
        }}
      >
        {/* <div
          onClickCapture={() => {
            console.log("inner-dev clicked");
          }}
          style={{ width: "100px", height: "100px", background: "blue" }}
        ></div> */}

        <button
          onClick={() => {
            console.log("clicked");
          }}
        >
          button
        </button>
      </div>
    </React.Fragment>
  );
};
// onClick - does the event bubbling
//onClickCapture - does the event capturing
