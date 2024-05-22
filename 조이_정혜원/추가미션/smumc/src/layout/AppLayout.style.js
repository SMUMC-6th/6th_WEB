import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  background-color: ${(props) => props.theme.bgColor};
  transition-property: background-color;
  transition-timing-function: ease-in;
  transition-duration: 400ms;

  color: ${(props) => props.theme.textColor};
`;

const ContentWrapper = styled.div`
  flex: 1;
  margin-top: 20px;
`;

export { Container, ContentWrapper };
