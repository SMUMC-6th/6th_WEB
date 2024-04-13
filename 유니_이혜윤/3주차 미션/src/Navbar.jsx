import * as N from "./Navbar.style"
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <N.HeaderContainer>
      <N.HeaderWrap>
        <N.HeaderLeft>
          {/* 기본 링크 스타일 제거, Navbar 스타일 유지 */}
          <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>UMC Movie</Link>
        </N.HeaderLeft>
        <N.HeaderRight>
          <li>
            <Link to="" style={{textDecoration: 'none', color: 'inherit'}}>회원가입</Link>
          </li>
          <li>
            <Link to="/popular" style={{textDecoration: 'none', color: 'inherit'}}>Popular</Link>
          </li>
          <li>
            <Link to="/nowplay" style={{textDecoration: 'none', color: 'inherit'}}>Now Playing</Link>
          </li>
          <li>
            <Link to="/toprated" style={{textDecoration: 'none', color: 'inherit'}}>Top Rated</Link>
          </li>
          <li>
            <Link to="/upcoming" style={{textDecoration: 'none', color: 'inherit'}}>Upcoming</Link>
          </li>
        </N.HeaderRight>
      </N.HeaderWrap>
    </N.HeaderContainer>
  )
}

export default Navbar;