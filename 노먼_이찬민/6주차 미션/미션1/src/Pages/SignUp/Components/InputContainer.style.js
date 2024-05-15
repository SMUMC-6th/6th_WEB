import styled from "styled-components";
import { Link } from "react-router-dom";

const InputContainer = styled.div`
  width: 100%;
  /* height: 30%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const InputBox = styled.input`
  width: 28.5%;
  padding: 10px;
  border-radius: 50px;
  border: 1px solid black;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MessageContainer = styled.div`
  width: 100%;
  height: 80%;
`;
const ErrorMessage = styled.div`
  font-size: 14px;
  color: rgb(232, 60, 26);
  font-weight: 600;
`;

export { InputContainer, InputBox, MessageContainer, ErrorMessage };
