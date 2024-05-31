import { Navbar, Cart } from "./components";
import * as S from "./styles/App.style";

function App() {
  return (
    <S.Container>
      <S.Content>
        <Navbar />
        <Cart />
      </S.Content>
    </S.Container>
  );
}

export default App;
