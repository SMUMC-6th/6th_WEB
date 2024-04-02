// 먼저 navber의 모든 스타일 컴포넌트를 사용하기 위해 import
import * as S from './Navbar.style.js' 
import PropTypes from 'prop-types';

// 객체로 받아질 func를 그대로 받아들이기 위해 js 표현식 {}를 사용하여 함수형태로 받음
const Navbar= ({func})=>{

  return(
    <S.Container>
      <S.Header color='red'>HEADER</S.Header>
      <S.Menu color='green'><S.HideButton onClick={func}>content 보지 않기!</S.HideButton></S.Menu>
    </S.Container>
  )
}

Navbar.propTypes = {
  func: PropTypes.func.isRequired // func props가 반드시 함수 타입이어야 함
};

export default Navbar;