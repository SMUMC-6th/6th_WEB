import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 5%;
  background-color: rgb(90, 90, 130);
`;

const Headers = styled.div`
  font-size: 22px;
  font-weight: 650;
  color: azure;
  margin-bottom: 3%;
`;

const LoginContainer = styled.form`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginButton = styled.button`
  width: 30%;
  height: 30%;
  border-radius: 50px;
  margin-top: 30px;

  @media (max-width: 767px) {
    width: 320px;
  }
`;

const TrailerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
const TrailerLeft = styled.div`
  font-size: 14px;
  color: azure;
`;
const TrailerToLoginPageLink = styled(Link)`
  font-size: 14px;
  color: azure;
  text-decoration: none;
  &:hover {
    scale: 1.1;
  }
  font-weight: bolder;
`;

export {
  Container,
  Headers,
  LoginContainer,
  LoginButton,
  TrailerContainer,
  TrailerLeft,
  TrailerToLoginPageLink,
};
