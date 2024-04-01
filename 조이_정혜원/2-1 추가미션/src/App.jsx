import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

import { useState } from "react";
import * as S from "./App.style";

function App() {
  const [click, setClick] = useState(false);

  return (
    <S.Container>
      <Navbar click={click} setClick={setClick} />
      <Content click={click} />
      <Footer />
    </S.Container>
  );
}

export default App;
