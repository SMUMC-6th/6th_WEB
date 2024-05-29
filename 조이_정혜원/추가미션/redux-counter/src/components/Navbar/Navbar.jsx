import { useSelector } from "react-redux";
import * as S from "./Navbar.style";

const Navbar = () => {
  const { cnt } = useSelector((state) => state.counter);

  return (
    <S.Container>
      <h4>UMC Redux-Toolkit 카운터 실습</h4>
      <p>{cnt}</p>
    </S.Container>
  );
};

export default Navbar;
