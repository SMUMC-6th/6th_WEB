import styled from "styled-components";

export const LoginContainer = styled.form`
  display: flex;
  background-color: #062863;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  color: rgb(255, 255, 255);

  h1 {
    text-align: center;
    font-size: 45px;
  }
`;

export const Input = styled.input`
  width: 500px;
  height: 40px;
  margin: 8px 0px 5px 0px;
  border-radius: 10px;
`;

export const Mes = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  color: red;
`;

export const SignUpButton = styled.button`
  width: 200px;
  height: 45px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  color: black;
`;

export const LinkDiv = styled.div`
  display: flex;
  flex-direction: row;
  text-decoration: none;

  h1 {
    color: white;
    font-size: 15px;
  }
`;