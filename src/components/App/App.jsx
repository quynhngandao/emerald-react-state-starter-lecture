import "./App.css";
import Clicker from "../Clicker/Clicker";

// object destructuring: our import is equivalent to these two lines
// import React from "react";
// useState = React.useState
import { useState } from "react";

function App() {
  // pass down color as a props
  // Notes: can pass in state and state function as props
  const [color, setColor] = useState("red");

  return (
    <>
      {/* props = {variable} */}
      <Clicker color={color} setColor={setColor} />
      <Clicker />
      <Clicker />
    </>
  );
}

export default App;
