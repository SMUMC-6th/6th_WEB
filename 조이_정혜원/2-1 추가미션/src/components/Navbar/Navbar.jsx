import * as S from "./Navbar.style";

const Navbar = ({ click, setClick }) => {
  return (
    <S.Container>
      <S.Header>HEADER</S.Header>
      <S.Menu>
        <S.Btn onClick={() => setClick((prev) => !prev)}>
          {click ? "Content보기!" : "Content 보지 않기"}
        </S.Btn>
      </S.Menu>
    </S.Container>
  );
};

export default Navbar;
