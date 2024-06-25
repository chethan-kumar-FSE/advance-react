import { useContext } from "react";
import { listContext } from "../context/listContext";

export const Tabs = ({ children }) => {
  return <div>{children}</div>;
};
export const Tab = ({ children, activeIndex }) => {
  const { setIndex } = useContext(listContext);

  return <div onClick={() => setIndex(activeIndex)}>{children}</div>;
};

const TabHeader = ({ children }) => {
  return <div>{children}</div>;
};

const TabContent = ({ children }) => {
  return <div>{children}</div>;
};

const TabPanel = ({ passedIndex, children }) => {
  const { index } = useContext(listContext);
  console.log(passedIndex, index);
  return index === passedIndex && <div>{children}</div>;
};
Tabs.Tab = Tab;
Tabs.TabHeader = TabHeader;
Tabs.TabContent = TabContent;
Tabs.TabPanel = TabPanel;
