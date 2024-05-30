import { useSelector } from "react-redux";
import * as S from "./Header.style";

const Header = () => {
  const count = useSelector((state) => state.counter.count);

  return (
    <S.Container>
      <h3>C O U N T E R</h3>
      <div>현재 품목 수 {count}</div>
    </S.Container>
  );
};

export default Header;
