import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  color: white;

  h3 {
    letter-spacing: 5px;
    margin-bottom: 50px;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;

  input {
    color: inherit;
    margin-bottom: 7px;
    border: 1px rgb(28, 32, 48) solid;
    border-radius: 10px;
    background-color: rgb(30, 35, 54);
    font-size: 11px;

    width: 300px;
    height: 30px;

    padding-left: 10px;

    &:placeholder-shown {
      letter-spacing: 1px;
      font-size: 11px;
    }
  }
`;

const Button = styled.button`
  letter-spacing: 3px;
  border: 1px rgb(28, 32, 48) solid;
  border-radius: 10px;
  margin-top: 30px;

  width: 300px;
  height: 35px;

  background-color: #11141f;

  cursor: pointer;

  color: ${(props) => (props.disabled ? "#23293d" : "#cfcfcf")};
  cursor: ${(props) => (props.disabled ? "" : "pointer")};
`;

export { Container, LoginForm, Button };
