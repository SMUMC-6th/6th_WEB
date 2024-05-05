import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  bottom: 0; left: 0;
  background-color: #181935;
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
      <StyledLink to="/">Todo</StyledLink>
      <StyledLink to="/trends">Trends</StyledLink>
      <StyledLink to="/week5">👍</StyledLink>
    </FooterContainer>
  )
}

export default Footer;