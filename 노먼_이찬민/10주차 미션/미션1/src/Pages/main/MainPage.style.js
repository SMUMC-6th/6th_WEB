import styled from "styled-components";

const Container = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(202, 227, 241, 1);
`;

const TotalPrice = styled.div`
  font-size: 20px;
  margin-bottom: 20px;
`;

const InitButton = styled.button`
  background-color: rgba(159, 184, 254, 1);
  border-radius: 10%;
  width: 15%;
  height: 50px;
  margin-bottom: 20px;
`;

const ErrorBox = styled.div`
  width: 50%;
  height: 300px;
  background-color: rgba(255, 188, 188, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-top: 20vh;

  p {
    color: rgba(32, 57, 101, 1);
    margin-top: 100px;
    text-align: center;
  }
`;
const ErrorButton = styled.button`
  width: 30%;
  height: 50px;
  border-radius: 5px;
  background-color: rgba(255, 0, 0, 1);
`;

export { Container, TotalPrice, InitButton, ErrorBox, ErrorButton };
