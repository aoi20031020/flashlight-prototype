import React from "react";
import Flashlight from "./components/Flashlight/Flashlight";
import "./App.css";
import Test from "./components/Test";

const App: React.FC = () => {
  return (
    <div className="app">
      <Flashlight />
      <Test />
    </div>
  );
};

export default App;
