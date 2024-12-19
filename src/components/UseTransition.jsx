import React, { useState, useTransition } from "react";

function UseTransition() {
  const [isPending, startTransition] = useTransition(); // Track the transition status
  const [filterText, setFilterText] = useState("");
  const [items] = useState([
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Grape",
    "Lemon",
    "Orange",
    "Peach",
    "Plum",
    "Strawberry",
  ]);
  const [filteredItems, setFilteredItems] = useState(items);

  const handleChange = (e) => {
    const value = e.target.value;
    setFilterText(value);

    startTransition(() => {
      // Expensive filtering operation
      const newFilteredItems = items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(newFilteredItems);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={filterText}
        onChange={handleChange}
        placeholder="Filter items"
      />
      <div>
        {isPending ? (
          <span>Filtering...</span>
        ) : (
          <ul>
            {filteredItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default UseTransition;

/* Use useDeferredValue when you want to delay an update to a value (like input text or search query) 
so that the UI doesn’t re-render too often. It only defers a single value update.

Use useTransition when you have multiple state updates that need to be coordinated, like when filtering or
 sorting large lists. You can defer non-urgent updates and keep the UI responsive by displaying a loading state. */
