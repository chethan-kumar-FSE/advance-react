import { createContext, useState } from "react";

const listContext = createContext();

const ListContext = ({ children }) => {
  const [list, setList] = useState([]);
  const [index, setIndex] = useState(1);
  return (
    <listContext.Provider value={{ setList, list, index, setIndex }}>
      {children}
    </listContext.Provider>
  );
};

export { ListContext, listContext };
