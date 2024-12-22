/* import { ListContext } from "./context/listContext";
import { Select } from "./components/Select";
import { useContext } from "react";
import { listContext } from "./context/listContext";
import { Tabs } from "./components/Tab";
import Product from "./components/Product"; */
import { BrowserRouter, Link, RouterProvider } from "react-router";
import Refering from "./components/Refering";
import Refing from "./components/Refing";
import Test1 from "./components/Test1";
import Test2 from "./components/Test2";
import Test3 from "./components/Test3";
import UseDeferedValue from "./components/UseDeferedValue";
import { UseId } from "./components/UseId";
import UseLayoutEffect from "./components/UseLayoutEffect";
import UseTransition from "./components/UseTransition";
import { AuthProvider } from "./context/PerformantContext";
import LazyComponent from "./LazyComponent";
import { AllRouter } from "./components/AsynReactRouter";
import ElementProp from "./components/ElementProp";
import { PerformantContext } from "./components/ContextApi1";
import { ContextApi2 } from "./components/ContextApi2";
function App() {
  return (
    <>
      <ContextApi2 />
    </>
  );
}
export default App;
