import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;
  background-color: #E8EDEF;
 `;

 const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 50%;
  height: 70%;
  border-radius: 20px;
  background-color: white;

  p {
    font-size: 30px;
    font-weight: bold;
    margin-top: 70px;
  }
`;

const InputBox = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 30px 0 20px 0;
  gap: 20px;

  input[type="text"] {
    width: 250px;
    height: 30px;

    border: 2.5px solid skyblue;
    border-radius: 20px;
    padding-left: 10px;
  }

  input[type="submit"] {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;

    background-color: skyblue;
    color: white;
    cursor: pointer;
    font-size: 20px;
  }
`;

 export {Container, Box, InputBox}