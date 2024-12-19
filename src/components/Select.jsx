import React, { useContext, useEffect, useState } from "react";
import { listContext } from "../context/listContext";
export const Select = ({ children }) => {
  const { list, setList } = useContext(listContext);
  function handleOnSelect(name) {
    const currentList = [...list];
    if (currentList.includes(name)) {
      let filteredList = currentList.filter((val) => val !== name);
      setList(filteredList);
      return;
    }
    currentList.push(name);
    setList(currentList);
  }
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { handleOnSelect });
        }
        return child;
      })}
    </>
  );
};

const Option = ({ value, children, handleOnSelect }) => {
  return <li onClick={() => handleOnSelect(value)}>{children}</li>;
};

Select.Option = Option;

const App = () => {
  return (
    <Select>
      <Select.Option value="apple">Apple</Select.Option>
      <Select.Option value="banana">banana</Select.Option>
      <Select.Option value="city">city</Select.Option>
      <Select.Option value="apple">Apple</Select.Option>
    </Select>
  );
};
