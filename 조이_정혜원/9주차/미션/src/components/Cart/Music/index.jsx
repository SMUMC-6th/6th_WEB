import { useDispatch } from "react-redux";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import * as S from "./Music.style";
import { decrease, increase, remove } from "../../../redux/cart/cartSlice";

const Music = ({ music }) => {
  const { img, price, singer, title, amount, id } = music;
  const dispatch = useDispatch();

  const handleDecrease = () => {
    if (amount === 1) dispatch(remove(id));
    else dispatch(decrease(id));
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
        <IoIosArrowUp onClick={() => dispatch(increase(id))} />
        <p>{amount}</p>
        <IoIosArrowDown onClick={handleDecrease} />
      </S.Amount>
    </S.Container>
  );
};

export default Music;
