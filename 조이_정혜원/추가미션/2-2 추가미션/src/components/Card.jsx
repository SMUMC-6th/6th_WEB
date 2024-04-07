import * as S from "./Card.style";
import { useState } from "react";
import Img from "../assets/IMG.jpg";
import { AiOutlineMessage } from "react-icons/ai";

const Card = () => {
  const [count, setCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked === false) {
      setCount((prev) => prev + 1);
    } else {
      setCount((prev) => prev - 1);
    }
    setIsClicked((prev) => !prev);
  };

  return (
    <S.Wrapper>
      <p>좋아요 개수 {count}</p>
      <S.Box>
        <S.Title>SMUMC POST</S.Title>
        <img src={Img} />
        <S.Content $isClicked={isClicked}>
          <AiOutlineMessage />
          <S.Heart onClick={handleClick} $isClicked={isClicked} />
          <S.FullHeart onClick={handleClick} $isClicked={isClicked} />
        </S.Content>
      </S.Box>
    </S.Wrapper>
  );
};

export default Card;
