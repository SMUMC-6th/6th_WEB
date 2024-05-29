import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CounterBox from "./components/CounterBox";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <CounterBox></CounterBox>
    </div>
  );
}

export default App;
