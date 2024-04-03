import Movies from "./components/Movies/Movies";
import { styled } from "styled-components";

function App() {
  return (
    <Container>
      <Movies />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
