import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 450px;

  h4 {
    margin-bottom: 20px;
  }
`;

const InputForm = styled.form`
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 5px;
    width: 200px;

    padding-left: 3px;

    &:placeholder-shown {
      font-style: italic;
    }
  }

  button {
    margin-top: 10px;
    cursor: pointer;
  }
`;

const ErrorMsg = styled.p`
  font-size: 9px;
  margin-left: 2px;
  margin-bottom: 3px;
  color: #f53e31;

  display: ${(props) => (props.$valid ? "none" : "block")};
`;

export { Container, InputForm, ErrorMsg };
