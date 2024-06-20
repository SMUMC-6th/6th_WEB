import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.nav`
  height: 50px;
  background-color: #22254a;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 20px;

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

  &:hover {
    transform: scale(0.95);
  }
`;

export { Container, NavContainer, NavLink };
