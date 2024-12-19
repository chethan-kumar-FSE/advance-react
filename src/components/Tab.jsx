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

const App = () => {
  return (
    <>
      <Tabs>
        <Tabs.Tab activeIndex={1}>Tab1</Tabs.Tab>
        <Tabs.Tab activeIndex={2}>Tab2</Tabs.Tab>
        <Tabs.Tab activeIndex={3}>Tab3</Tabs.Tab>

        <Tabs.TabPanel passedIndex={1}>
          <Tabs.TabHeader>Header 1</Tabs.TabHeader>
          <Tabs.TabContent>Content 1</Tabs.TabContent>
        </Tabs.TabPanel>
        <Tabs.TabPanel passedIndex={2}>
          <Tabs.TabHeader>Header 2</Tabs.TabHeader>
          <Tabs.TabContent>content 2</Tabs.TabContent>
        </Tabs.TabPanel>
        <Tabs.TabPanel passedIndex={3}>
          <Tabs.TabHeader>Header 3</Tabs.TabHeader>
          <Tabs.TabContent>content 3</Tabs.TabContent>
        </Tabs.TabPanel>
      </Tabs>{" "}
      */
    </>
  );
};
