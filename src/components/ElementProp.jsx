import React from "react";

const buttonFontSizes = {
  xl: "20px",
  l: "16px",
  m: "14px",
  s: "12px",
};

//to make a button more flexible we use As prop to send down the props , based on As we render the type of element we want
const Button = ({ As = "button", size = "l", children, ...props }) => {
  console.log("props", { ...props });
  return (
    <As
      style={{
        fontSize: buttonFontSizes[size],
        textDecoration: As === "a" ? "none" : null,
        background: "blue",
        padding: As === "a" ? "1em" : "0.5em",
      }}
      {...props}
    >
      {children}
    </As>
  );
};

const ElementProp = () => {
  const handler = () => {
    console.log("printing");
  };
  return (
    <React.Fragment>
      <Button size="xl" onClick={handler}>
        X Large
      </Button>
      <Button size="l">L large</Button>

      {/* we need anchor button , thast why mentioned As="a", which makes more flexible */}
      <Button As="a" size="l" href="/">
        Link
      </Button>
    </React.Fragment>
  );
};
export default ElementProp;
