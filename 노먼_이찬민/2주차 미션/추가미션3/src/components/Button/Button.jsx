import * as S from './Button.style'
import { useState , useRef } from 'react';

const Button = ({func}) => {
  const max = 16777215; // 16^6
  // max 범위로 랜덤 생성 후 정수로 만들고(.floor) 16진수 문자열로 변환
  const randomColor = (max) => Math.floor(Math.random() * max).toString(16);

  const [colorBcg, setColorBcg] = useState('#' + randomColor(max));
  const [color1, setColor1] = useState('#' + randomColor(max));
  const [color2, setColor2] = useState('#' + randomColor(max));
  const [color3, setColor3] = useState('#' + randomColor(max));
  // console.log(color1, color2, color3);

  const Button1Ref = useRef();
  const Button2Ref = useRef();
  const Button3Ref = useRef();

  function handleClick() {
    setColorBcg('#' + randomColor(max));
    setColor1('#' + randomColor(max));
    setColor2('#' + randomColor(max));
    setColor3('#' + randomColor(max));
  }

  // Button1Ref.current.style.color = '#' + randomColor(max);
  // Button2Ref.current.color = '#' + randomColor(max);
  // Button3Ref.current.color = '#' + randomColor(max);
  // console.log(Button1Ref.current.style.color);

  // onclick 이벤트핸들러로 랜덤컬러 생성해서 useRef로 button1Ref.current.style.backgroundColor = randomColor(max)?
  // 클릭 누르면, 색깔 랜덤으로 뽑고! 그 다음에 바뀐 색을 props로 줘야함
  return(
    <S.ButtonContainer color={colorBcg}>
      <S.Button color='red' onClick={func}>클릭!</S.Button>
      <S.Button ref={Button1Ref} onClick={handleClick} color={color1}>클릭!</S.Button>
      <S.Button ref={Button2Ref} onClick={handleClick} color={color2}>클릭!</S.Button>
      <S.Button ref={Button3Ref} onClick={handleClick} color={color3}>클릭!</S.Button>
    </S.ButtonContainer>
  )
}

export default Button