import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(90, 90, 130);
`;

const Header = styled.div`
  height: 10%;
  margin-bottom: 5%;
`;

const Button = styled.button`
  width: 100%;
  height: 200%;
`;

export { Container, Header, Button };
