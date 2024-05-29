import { Input, TodoList } from "./components";
import * as S from "./styles/App.style";

function App() {
  return (
    <S.Container>
      <h1>TODOLIST</h1>
      <S.Wrapper>
        <Input />
        <TodoList />
      </S.Wrapper>
    </S.Container>
  );
}

export default App;
