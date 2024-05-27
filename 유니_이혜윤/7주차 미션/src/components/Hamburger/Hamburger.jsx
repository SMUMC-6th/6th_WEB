import { NavLink } from 'react-router-dom';
import * as H from './Hamburger.style'

const HamburgerMenu = ({setActiveStyle, isLoggedIn, toggleLogin, isOpen, setIsOpen}) => {
  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <div onMouseLeave={closeMenu}>
      <H.SideBar isOpen={isOpen ? "show" : ""}>
        <H.MenuList>
          <li>
            <NavLink to="/login" style={ setActiveStyle } onClick={() => {toggleLogin(); closeMenu();}}>
              {isLoggedIn ? '로그아웃' : '로그인'}</NavLink>
          </li>
          <li>
            <NavLink to="/signup" style={ setActiveStyle } onClick={closeMenu}>회원가입</NavLink>
          </li>
          <li>
            <NavLink to="/popular" style={ setActiveStyle } onClick={closeMenu}>Popular</NavLink>
          </li>
          <li>
            <NavLink to="/nowplay" style={ setActiveStyle } onClick={closeMenu}>Now Playing</NavLink>
          </li>
          <li>
            <NavLink to="/toprated" style={ setActiveStyle } onClick={closeMenu}>Top Rated</NavLink>
          </li>
          <li>
            <NavLink to="/upcoming" style={ setActiveStyle } onClick={closeMenu}>Upcoming</NavLink>
          </li>
        </H.MenuList>
      </H.SideBar>
    </div>
  );
};

export default HamburgerMenu;