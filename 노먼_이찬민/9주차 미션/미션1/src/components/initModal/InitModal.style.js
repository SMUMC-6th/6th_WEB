import styled from "styled-components";

const Container = styled.div`
  width: 60%;
  height: 60%;
  position: absolute;
  top: 15%;
  background-color: azure;
  border-radius: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MessageBox = styled.div`
  width: 100%;
  height: 60%;
  color: rgba(99, 110, 104, 1);
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonBox = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  background-color: ${(props) => (props.color ? props.color : "white")};
  border-radius: 10%;

  &:hover {
    cursor: pointer;
    scale: 1.1;
  }
`;

export { Container, MessageBox, ButtonBox, Button };
