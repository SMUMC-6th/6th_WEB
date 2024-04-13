import * as S from "./Header.style";

const Header = () => {
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
    </S.Container>
  );
};

export default Header;
