import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: ivory;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const ContentWrapper = styled.div`
  width: 90%;
  height: 40%;
  display: flex;
  padding-left: 5%;
`;

const InputContentWrapper = styled.div`
  width: 90%;
  height: 40%;
  display: flex;
  padding-left: 5%;
`;
const InputContent = styled.input`
  width: 100%;
  /* height: 100%; */
  border-radius: 10px;
`;
const ModifySubmitButton = styled.button`
  width: 10%;
  /* height: 100%; */
  border-radius: 10px;
  margin-left: 5%;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 5%;
`;

const Button = styled.button`
  width: 10%;
  height: 100%;
  background-color: aliceblue;
  border: 1px dotted black;
  margin-right: 2%;
  border-radius: 10px;
  border: 2px dotted black;
`;

export {
  Container,
  ContentWrapper,
  InputContentWrapper,
  InputContent,
  ModifySubmitButton,
  ButtonContainer,
  Button,
};
