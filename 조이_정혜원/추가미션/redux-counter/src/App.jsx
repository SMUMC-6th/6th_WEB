import * as S from "./App.style";
import { Navbar, Counter } from "./components";

function App() {
  return (
    <S.Container>
      <S.Wrapper>
        <Navbar />
        <Counter />
      </S.Wrapper>
    </S.Container>
  );
}

export default App;
