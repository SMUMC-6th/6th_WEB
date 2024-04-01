import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import * as MD from "./App.style";

const App = () => {
  const [hide, setHide] = useState(false);

  return (
    <MD.Container>
      <Navbar setHide={setHide} hide={hide} />
      <Content hide={hide} />
      <Footer />
    </MD.Container>
  );
};

export default App;
