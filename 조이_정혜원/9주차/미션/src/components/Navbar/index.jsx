import * as S from "./Navbar.style";
import { CartIcon } from "../../constants/icons";
import { TbBrandNeteaseMusic } from "react-icons/tb";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { totalNum } = useSelector((state) => state.cart);

  return (
    <S.Container>
      <h1>
        <TbBrandNeteaseMusic />
        UMC
      </h1>
      <S.Icon>
        <CartIcon />
        <p>{totalNum}</p>
      </S.Icon>
    </S.Container>
  );
};

export default Navbar;
