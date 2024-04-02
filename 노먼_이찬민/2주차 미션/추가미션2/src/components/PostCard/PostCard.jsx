import * as S from './PostCard.style';
import Icons from '../Icons/Icons';
import { useState } from 'react';

const PostCard = () => {
  const [count, setCount] = useState(0);
  const [isPressed, setIsPressed] = useState(false);
  // handle이라는 관례가 있나봐...
  const handleClick = () => {
    // 하트 toggle적인 속성으로 빨갛게 -> Icons styled component에서 해결, 
    // count + 1 -> 어차피 자식 컴포넌트에서 실행되어도 이 컴포넌트의 count 상태값이 변함
    setIsPressed(!isPressed);
    count === 0? setCount(1) : setCount(0);
  }

  return (
    <div className='wrapper'>
      <S.CountMessage>좋아요 개수 : {count}</S.CountMessage>
      <S.CardContainer>
        <S.CardHeader>SMUMC POST</S.CardHeader>
        <S.CardImage></S.CardImage>
        <Icons func={handleClick} isPressed={isPressed}/>
      </S.CardContainer>
    </div>
  )
}

export default PostCard;