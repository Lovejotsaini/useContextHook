// App.js
import React from "react";
import MyProvider from "./MyProvider";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

const App = () => {
  return (
    <MyProvider>
      <ComponentA />
      <ComponentB />
    </MyProvider>
  );
};

export default App;
