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

    @media (max-width: 768px) {
      font-size: 35px;
    }

    @media (max-width: 480px) {
      font-size: 25px;
    }
  }
`;

export const Mes = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  color: red;
`;

export const Input = styled.input`
  width: 500px;
  height: 40px;
  margin: 8px 0px 5px 0px;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const LoginButton = styled.button`
  width: 500px;
  height: 50px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const LinkDiv = styled.div`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  margin-top: 20px;

  h1 {
    color: white;
    font-size: 15px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
