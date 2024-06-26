import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 40px;
  font-family: var(--font-googleNanumGothic);

  background-color: #eef3f6;
  width: 100%;

  p {
    font-size: 25px;
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: 70px;
  }
`;

const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  
  img {
    width: 120px;
    height: 120px;
    margin-right: 20px;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  padding: 10px;
  height: 120px;

  p {
    font-size: 15px;
    font-weight: normal;
    margin-bottom: 0px;
  }
`;

const Count = styled.div`
  display: flex;
  flex-direction: column;

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  svg {
    width: 20px;
    height: 20px;
    color: #5852FE;
  }

  p {
    font-size: 20px;
    margin: 5px 19px;
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;

  p {
    font-size: 20px;
  }
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background: black;
  margin: 20px 0;
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  color: red;
  border: 1px solid red;
  border-radius: 10px;
`;

export { Container, List, Text, Count, Total, Divider, Button }