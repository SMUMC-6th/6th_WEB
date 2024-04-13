import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.nav`
  height: 40px;
  background-color: #22254a;
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

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;

  &.active {
    color: yellow;
  }
`;

export { Container, NavContainer, NavLink };
