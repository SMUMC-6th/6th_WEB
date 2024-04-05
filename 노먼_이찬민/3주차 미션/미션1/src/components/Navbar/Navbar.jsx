import * as S from './Navbar.style'
import { Link } from 'react-router-dom'; // 라우터의 링크 구현을 위해 import

const Navbar = () => {
  return(
    <S.Container>
      <S.Caption><Link to="/">SMUMC</Link></S.Caption>
      <S.PageLinkContainer>
        {/* <S.PageLink><Link to='/'>회원가입</Link></S.PageLink>
        <S.PageLink><Link to='/PopularPage'>Popular</Link></S.PageLink>
        <S.PageLink><Link to='/NowPlayingPage'>Now Playing</Link></S.PageLink>
        <S.PageLink><Link to='/TopRatedPage'>Top Rated</Link></S.PageLink>
        <S.PageLink><Link to='/UpcommingPage'>Upcoming</Link></S.PageLink> */}
        <Link to='/'><S.PageLink>회원가입</S.PageLink></Link>
        <Link to='/PopularPage'><S.PageLink>Popular</S.PageLink></Link>
        <Link to='/NowPlayingPage'><S.PageLink>Now Playing</S.PageLink></Link>
        <Link to='/TopRatedPage'><S.PageLink>Top Rated</S.PageLink></Link>
        <Link to='/UpcommingPage'><S.PageLink>Upcoming</S.PageLink></Link>
      </S.PageLinkContainer>
    </S.Container>
  )
}

export default Navbar;