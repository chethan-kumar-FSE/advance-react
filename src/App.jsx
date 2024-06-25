import { ListContext } from "./context/listContext";
import { Select } from "./components/Select";
import { useContext } from "react";
import { listContext } from "./context/listContext";
import { Tabs } from "./components/Tab";
import Product from "./components/Product";
function App() {
  const { list } = useContext(listContext);
  const { index, setIndex } = useContext(listContext);

  return (
    <>
      {/* <Recursive fileExplorer={fileExplorer} /> */}
      <Select>
        <Select.Option value="apple">Apple</Select.Option>
        <Select.Option value="banana">banana</Select.Option>
        <Select.Option value="city">city</Select.Option>
        <Select.Option value="apple">Apple</Select.Option>
      </Select>
      <button onClick={() => console.log(list)}>Get selected</button>

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
      </Tabs>

      {/* <Product>
        <Product.ProductHeader>Product Engineer</Product.ProductHeader>
        <Product.ProductPrice>12</Product.ProductPrice>
      </Product>

      <Product>
        <Product.ProductPrice>12</Product.ProductPrice>
        <Product.ProductHeader>Product Engineer</Product.ProductHeader>
      </Product> */}
    </>
  );
}
export default App;
