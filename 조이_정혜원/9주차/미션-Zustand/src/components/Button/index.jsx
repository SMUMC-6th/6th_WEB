import * as S from "./Button.style";
import { open } from "../../redux/modal/modalSlice";
import { useCartStore, useModalStore } from "../../store";

const Button = ({ cartclear, text, no }) => {
  const { clear } = useCartStore((state) => state);
  const { open } = useModalStore((state) => state);

  const handleModal = () => {
    if (cartclear) clear();
    open();
  };

  return (
    <S.Container onClick={handleModal} $no={no}>
      {text}
    </S.Container>
  );
};

export default Button;
