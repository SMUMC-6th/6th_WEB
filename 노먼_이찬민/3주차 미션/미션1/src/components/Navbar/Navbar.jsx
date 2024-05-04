import * as S from './Navbar.style'
import React from 'react';
import { Link } from 'react-router-dom'; // 라우터의 링크 구현을 위해 import

const Navbar = () => {
  // const [isHover, setIsHover] = useState(false); -> 그냥 css 모듈 import하고 스타일 컴포넌트 내부에서 처리함

  return(
    <S.Container>
      <S.Caption><S.Links to="/">🪄 SMUMC 🪄</S.Links></S.Caption>
      <S.PageLinkContainer>
        {/* <S.PageLink><S.Links to='/'>회원가입</S.Links></S.PageLink>
        <S.PageLink><S.Links to='/PopularPage'>Popular</S.Links></S.PageLink>
        <S.PageLink><S.Links to='/NowPlayingPage'>Now Playing</S.Links></S.PageLink>
        <S.PageLink><S.Links to='/TopRatedPage'>Top Rated</S.Links></S.PageLink>
        <S.PageLink><S.Links to='/UpcommingPage'>Upcoming</S.Links></S.PageLink> */}
        <S.Links to='/'><S.PageLink>회원가입</S.PageLink></S.Links>
        <S.Links to='/PopularPage'><S.PageLink>Popular</S.PageLink></S.Links>
        <S.Links to='/NowPlayingPage'><S.PageLink>Now Playing</S.PageLink></S.Links>
        <S.Links to='/TopRatedPage'><S.PageLink>Top Rated</S.PageLink></S.Links>
        <S.Links to='/UpcommingPage'><S.PageLink>Upcoming</S.PageLink></S.Links>
      </S.PageLinkContainer>
    </S.Container>
  )
}

export default Navbar;