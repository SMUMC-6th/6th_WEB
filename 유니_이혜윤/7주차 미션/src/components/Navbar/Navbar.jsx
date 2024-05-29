import { useState } from 'react';
import {Link, NavLink} from 'react-router-dom';
import * as N from './Navbar.style'
import HamburgerMenu from '../Hamburger/Hamburger'
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn ] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

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
          <N.MenuList>
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
          </N.MenuList>
        </N.HeaderRight>
        <N.Hamburger onClick={toggleMenu}>
          <RxHamburgerMenu size='20px' color='white'/>
        </N.Hamburger>
      </N.HeaderWrap>
      <HamburgerMenu setActiveStyle={setActiveStyle} isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} isOpen={isMenuOpen} setIsOpen={setIsMenuOpen}/>
    </N.HeaderContainer>
  )
}

export default Navbar;