import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const InputContentWrapper = styled.div``;
const InputContent = styled.input``;
const ModifySubmitButton = styled.button``;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  background-color: aliceblue;
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
