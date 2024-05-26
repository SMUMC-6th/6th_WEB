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
const FormContainer = styled.form`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const FormButton = styled.button`
  width: 30%;
  height: 12%;
  border-radius: 50px;

  @media (max-width: 767px) {
    width: 220px;
  }
`;

const Header = styled.div`
  font-size: 22px;
  font-weight: 650;
  color: azure;
  margin-bottom: 3%;
`;

const TrailerContainer = styled.div`
  display: flex;
  height: 20%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media (max-width: 767px) {
    /* width: 400px; */
  }
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
  FormContainer,
  FormButton,
  Header,
  TrailerContainer,
  TrailerLeft,
  TrailerToLoginPageLink,
};
