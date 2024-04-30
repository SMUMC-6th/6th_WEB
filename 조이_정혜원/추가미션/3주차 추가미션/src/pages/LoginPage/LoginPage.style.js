import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  height: 450px;

  h4 {
    margin-bottom: 7px;
  }
`;

const LoginContainer = styled.div`
  width: 200px;
  height: 84px;
  align-items: center;

  button {
    margin-top: 10px;
    width: 200px;

    cursor: pointer;
  }
`;

const SignupConatiner = styled.div`
  display: flex;
  flex-direction: column;

  width: 200px;
  height: 84px;

  margin-left: 10px;
  div {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  p {
    margin-top: 10px;
    width: 70%;
    font-size: 13px;
  }

  button {
    cursor: pointer;

    width: 63px;
    height: 50px;
  }
`;

const InputWrapper = styled.form`
  input {
    display: flex;
    flex-direction: column;
    width: 200px;
    margin-bottom: 2px;

    &:placeholder-shown {
      font-style: italic;
    }
  }
`;

const ErrorMsg = styled.p`
  font-size: 9px;
  margin-left: 2px;
  color: #f53e31;

  display: ${(props) => (props.$valid ? "none" : "block")};
`;

export { Container, LoginContainer, SignupConatiner, InputWrapper, ErrorMsg };
