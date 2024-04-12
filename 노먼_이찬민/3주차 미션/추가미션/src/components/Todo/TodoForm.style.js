import styled from "styled-components";

const FormContainer = styled.form`
  margin: 2% 0;
  display: flex;
  justify-content: space-around;
  width: 80%;
  height: 10%;
`;

const InputContainer = styled.div`
  width: 90%;
  height: 100%;
`;
const Input = styled.input`
  width: 100%;
  height: 80%;
`;
const SubmitButton = styled.button`
  margin-top: 4px;
  width: 7%;
  height: 80%;
  border: none;
  background-color: lavender;
`;

export { FormContainer, InputContainer, Input, SubmitButton };
