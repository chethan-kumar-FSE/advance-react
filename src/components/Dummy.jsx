import React from "react";

export function Dummy({ displayCount, content }) {
  console.log("rendering from Dummy");
  return (
    <div>
      Dummy <button onClick={displayCount}>DisplayCount</button>
      <b>{content}</b>
    </div>
  );
}

// Modify React.memo to consider both `content` and `displayCount` for comparison
export default React.memo(Dummy, (prevProps, nextProps) => {
  return (
    prevProps.content === nextProps.content &&
    prevProps.displayCount === nextProps.displayCount
  );
});
