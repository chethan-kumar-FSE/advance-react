import React, { useContext, useReducer, useState } from "react";
//reducer for shopping cart
const cartReducer = (state, action) => {
  console.log("cation", action.payload, state);
  switch (action.type) {
    case "ADD_ITEM": {
      return { items: [...state.items, action.payload] };
    }
    default:
      throw new Error("Please pass a valid action type");
  }
};

//context api creation
const CartContext = React.createContext();
const CartDisplayContext = React.createContext();

export const ShoppingCart = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
  });

  return (
    <React.Fragment>
      <CartContext.Provider value={dispatch}>
        <CartDisplayContext value={state}>{children}</CartDisplayContext>
      </CartContext.Provider>
    </React.Fragment>
  );
};
export const useCart = () => useContext(CartContext);
const useDisplayCart = () => useContext(CartDisplayContext);

export const ContextApi2 = () => {
  return (
    <React.Fragment>
      <ShoppingCart>
        <Display />
        <Controls />
      </ShoppingCart>
    </React.Fragment>
  );
};

const Display = () => {
  const state = useDisplayCart();
  console.log("strate", state);
  return (
    <React.Fragment>
      {state.items.map((val) => {
        return <p>{val}</p>;
      })}
    </React.Fragment>
  );
};
const Controls = () => {
  const dispatch = useCart();
  const [value, setValue] = useState("");

  console.log("controls -renderngfing");
  const handle = () => {
    dispatch({ type: "ADD_ITEM", payload: value });
  };
  return (
    <React.Fragment>
      <input type="text" onInput={(e) => setValue(e.target.value)} />
      <button onClick={handle}>Submit</button>
    </React.Fragment>
  );
};
