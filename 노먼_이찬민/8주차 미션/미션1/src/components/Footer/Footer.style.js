import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 5%;
  justify-content: space-between;
  background-color: rgb(70, 70, 110);
`;

const Logo = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  @media screen and (max-width: 767px) {
    width: 100px;
  }

  @media (max-width: 355px) {
    font-size: 10px;
  }
`;

const CopyRight = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  @media screen and (max-width: 767px) {
    width: 300px;
  }

  @media (max-width: 355px) {
    font-size: 10px;
  }
`;

export { Container, Logo, CopyRight };
