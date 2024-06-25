import React from "react";
function Recursive({ fileExplorer }) {
  return (
    <div style={{ paddingLeft: "40px" }}>
      {Object.entries(fileExplorer).map(([key, value]) => (
        <React.Fragment key={key}>
          <p>{key}</p>
          {typeof value !== "object" ? (
            <File filename={value} key={key} />
          ) : (
            <Recursive fileExplorer={value} key={key} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

function File({ filename }) {
  return (
    <p style={{ paddingLeft: "20px" }}>{filename}</p> // Now wrapped in curly braces
  );
}

export default Recursive;
