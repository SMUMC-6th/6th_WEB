import * as S from './Icons.style'

// icons 태그에 전달된 func라는 이름의 객체props을 {함수}로 사용 + color ??? 반대인가???? 
// 사실상 이 컴포넌트의 자식 컴포넌트인 스타일 컴포넌트로 props를 그대로 한 번 더 넘겨줌 (거기서 접근하려고)
// props 받을 때는 해당 자식 컴포넌트의 매개변수에 지정하는 거 까먹지 말기!
const Icons = ({func, isPressed}) => {

  return (
    <S.IconsContainer>
      <S.MessageIcon></S.MessageIcon>
      {(isPressed && (<S.FilledHeartIcon onClick={func} isPressed={isPressed}></S.FilledHeartIcon>))}
      {(!isPressed && (<S.NonFilledHeartIcon onClick={func} isPressed={isPressed}></S.NonFilledHeartIcon>))}
    </S.IconsContainer>
  )
}

export default Icons