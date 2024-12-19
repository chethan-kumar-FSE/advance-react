import React, { useState, useMemo, useDeferredValue } from "react";

function UseDeferedValue() {
  const [searchTerm, setSearchTerm] = useState("");
  const deferredSearchTerm = useDeferredValue(searchTerm);

  const results = useMemo(() => {
    // Simulate an expensive computation for filtering
    return Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`).filter(
      (item) => item.toLowerCase().includes(deferredSearchTerm.toLowerCase())
    );
  }, [deferredSearchTerm]);
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseDeferedValue;

/* Explanation
Without useDeferredValue:

Each keystroke in the search box triggers a re-render of the results list immediately, which may cause the UI to lag if filtering the list is computationally expensive.
With useDeferredValue:

The deferredSearchTerm value updates at a lower priority.
The input field remains responsive, as React prioritizes rendering the input changes before updating the list. */
