import * as S from "./Navbar.style";
import { CartIcon } from "../../constants/icons";
import { TbBrandNeteaseMusic } from "react-icons/tb";
import useCartStore from "../../store/useCartStore";

const Navbar = () => {
  const { totalNum } = useCartStore((state) => state);

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
