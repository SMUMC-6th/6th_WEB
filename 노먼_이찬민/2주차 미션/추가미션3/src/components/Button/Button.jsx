import * as S from './Button.style'
import { useRef } from 'react';

const Button = (func) =>{
  const max = 16777216; // 16^6
  const randomColor = (
    (max) => {Math.floor(Math.random() * max).toString(16) // 16진수 문자열로 변환
  });

  // const [color, setColor] = useState(randomColor(max));
  const Button1ColorRef = useRef(randomColor(max));

  // onclick 이벤트핸들러로 랜덤컬러 생성해서 useRef로 button1Ref.current.style.backgroundColor = randomColor(max)?
  // 아니면 color를 state로 두고 반복생성? -> 변하자마자 렌더링 되면 color를 props로 못 넣는거같기도? 
  // 클릭 누르면, 색깔 랜덤으로 뽑고! 그 다음에 바뀐 색을 props로 줘야함
  return(
    <S.ButtonContainer>
      <S.Button color='red' onClick={func}>클릭!</S.Button>
      <S.Button>클릭!</S.Button>
      <S.Button>클릭!</S.Button>
      <S.Button>클릭!</S.Button>
    </S.ButtonContainer>
  )
}

export default Button