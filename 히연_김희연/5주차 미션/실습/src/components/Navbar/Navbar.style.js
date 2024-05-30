import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.nav`
  height: 40px;
  background-color: #22254a;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  h1 {
    cursor: pointer;
  }
`;

const NavContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Link = styled(NavLink)`
  color: white;
  text-decoration: none;
  &:hover,
  &.active {
    transform: scale(0.95);
    color: yellow;
  }
`;

export { Container, NavContainer, Link };
