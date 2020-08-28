import React from "react";
import "./styles.css";
import Day from "./components/Day";
import Hours from "./components/Hours";
import Minutes from "./components/Minutes";
import Seconds from "./components/Seconds";

function Dots() {
  return <h1 className="dots">:</h1>;
}
function App() {
  return (
    <div className="container-app">
      <div className="clock-container">
        <Day />
        <Dots />
        <Hours />
        <Dots />
        <Minutes />
        <Dots />
        <Seconds />
      </div>
    </div>
  );
}

export default App;
