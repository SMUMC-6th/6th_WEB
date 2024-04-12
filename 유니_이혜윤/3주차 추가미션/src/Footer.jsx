import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0; left: 0;
  background-color: #181935;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  color: white; 
  text-decoration: none; // 밑줄 제거

  &:hover {
    color: #grey; 
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <StyledLink to="/week3">3주차</StyledLink>
      <StyledLink to="/week4">4주차</StyledLink>
      <StyledLink to="/week5">5주차</StyledLink>
    </FooterContainer>
  )
}

export default Footer;