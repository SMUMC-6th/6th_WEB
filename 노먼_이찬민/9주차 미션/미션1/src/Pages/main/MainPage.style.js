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

export { Container, TotalPrice, InitButton };
