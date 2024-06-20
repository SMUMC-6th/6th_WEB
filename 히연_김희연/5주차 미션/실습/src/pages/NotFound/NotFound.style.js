import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin: 250px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: white;
  margin: 15px;
`;

const Message = styled.p`
  font-size: 16px;
  color: white;
  line-height: 1.5;
  margin: 10px;
`;

const Button = styled.button`
  font-size: 20px;
  background-color: #22254a;
  color: white;
  padding: 10px 20px;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;

  &:hover {
    background-color: black;
  }
`;

export { Container, Title, Message, Button };
