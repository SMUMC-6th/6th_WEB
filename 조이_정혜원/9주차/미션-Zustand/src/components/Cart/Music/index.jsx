import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import * as S from "./Music.style";
import useCartStore from "../../../store/useCartStore";

const Music = ({ music }) => {
  const { img, price, singer, title, amount, id } = music;
  const { increase, decrease, remove } = useCartStore((state) => state);

  const handleDecrease = () => {
    if (amount === 1) remove(id);
    else decrease(id);
  };

  return (
    <S.Container>
      <S.MusicWrapper>
        <img src={img} />
        <S.Wrapper>
          <S.Title>
            <p>
              {title} - {singer}
            </p>
          </S.Title>
          <span>₩ {price}</span>
        </S.Wrapper>
      </S.MusicWrapper>

      <S.Amount>
        <IoIosArrowUp onClick={() => increase(id)} />
        <p>{amount}</p>
        <IoIosArrowDown onClick={handleDecrease} />
      </S.Amount>
    </S.Container>
  );
};

export default Music;
