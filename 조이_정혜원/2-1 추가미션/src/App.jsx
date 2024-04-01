import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import styled from "styled-components";
import { useState } from "react";

function App() {
  const [click, setClick] = useState(false);

  return (
    <Container>
      <Navbar click={click} setClick={setClick} />
      <Content click={click} />
      <Footer />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
`;
