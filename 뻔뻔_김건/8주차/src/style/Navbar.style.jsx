import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  background-color: #0E0F37;
  height: 128px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    height: 80px;
  }
`;

export const LogoBox = styled.div`
  text-decoration: none;
  margin-left: 20px;
`;

export const NavbarItem = styled.div`
  display: flex;
  gap: 10px;
  font-weight: bold;
  margin-right: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 10px;

  h1 {
    color: white;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
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

export const Hamburger = styled.div`
  display: none;
  font-size: 30px;
  color: white;
  margin-right: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: 28px;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    flex-direction: column;
    background-color: #0E0F37;
    padding: 20px 0;
    z-index: 100;
  }
`;
