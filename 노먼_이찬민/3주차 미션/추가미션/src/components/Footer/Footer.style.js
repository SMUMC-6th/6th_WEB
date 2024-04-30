import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.div`
  width: 100%;
  height: 10%;
  background-color: aliceblue;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const FooterContent = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Links = styled(Link)`
  text-decoration: none;

  &:hover {
    cursor: pointer;
    transform: scale(1.15);
  }
`;

export { FooterContainer, FooterContent, Links };
