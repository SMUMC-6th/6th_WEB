import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="result">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
