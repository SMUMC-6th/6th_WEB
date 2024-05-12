import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const footerLink = styled(Link)`
  display: flex;

  text-decoration: none;
  color: cornflowerblue;

  &:hover {
    cursor: pointer;
  }
`;

export { Container, footerLink };
