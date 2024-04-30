import { useNavigate } from "react-router-dom";
import * as S from "./Header.style";

const Header = () => {
  const nav = useNavigate();
  return (
    <S.Container>
      <div>
        <S.Icon>
          <S.IconCircle $color="#fa6b6b" />
          <S.IconCircle $color="#fff09e" />
          <S.IconCircle $color="#67b56f" />
        </S.Icon>
      </div>
      <h4>TODOLIST</h4>
      <S.Profile onClick={() => nav("/login")} />
    </S.Container>
  );
};

export default Header;
