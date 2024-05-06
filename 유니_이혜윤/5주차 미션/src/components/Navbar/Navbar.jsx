import { useState } from 'react';
import {Link, NavLink} from 'react-router-dom';
import * as N from './Navbar.style'

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn ] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const setActiveStyle = ({ isActive }) => ({
    textDecoration: 'none',
    color: isActive ? '#ffbe00' : 'inherit' // 현재페이지일때 노란색, 아니면 기본색
  });

  return (
    <N.HeaderContainer>
      <N.HeaderWrap>
        <N.HeaderLeft>
          <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>UMC Movie</Link>
        </N.HeaderLeft>
        <N.HeaderRight>
          <li>
            <NavLink to="/login" style={ setActiveStyle }
            onClick={toggleLogin}>{isLoggedIn ? '로그아웃' : '로그인'}</NavLink>
          </li>
          <li>
            <NavLink to="/signup" style={ setActiveStyle }>회원가입</NavLink>
          </li>
          <li>
            <NavLink to="/popular" style={ setActiveStyle }>Popular</NavLink>
          </li>
          <li>
            <NavLink to="/nowplay" style={ setActiveStyle }>Now Playing</NavLink>
          </li>
          <li>
            <NavLink to="/toprated" style={ setActiveStyle }>Top Rated</NavLink>
          </li>
          <li>
            <NavLink to="/upcoming" style={ setActiveStyle }>Upcoming</NavLink>
          </li>
        </N.HeaderRight>
      </N.HeaderWrap>
    </N.HeaderContainer>
  )
}

export default Navbar;