import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  background-color: #0E0F37;
  height: 128px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoBox = styled.div`
  text-decoration: none;
  margin-left: 20px;
`;

export const NavbarItem = styled.div`
  display: flex;
  gap: 28px;
  font-weight: bold;
  margin-right: 20px;

  h1 {
    color: white;
  }
`;

export const Button = styled.button`
  display: flex;
  background: none;
  border: none;
  font-size: 20px;
  font-weight: bold;
  margin-top: 13.5px;
  color: white;
`;

export const LinkPage = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
  }
`;