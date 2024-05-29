import * as S from "./Button.style";
import { open } from "../../redux/modal/modalSlice";
import { clear } from "../../redux/cart/cartSlice";
import { useDispatch } from "react-redux";

const Button = ({ cartclear, text, no }) => {
  const dispatch = useDispatch();

  const handleModal = () => {
    if (cartclear) dispatch(clear());
    dispatch(open());
  };

  return (
    <S.Container onClick={handleModal} $no={no}>
      {text}
    </S.Container>
  );
};

export default Button;
