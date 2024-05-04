import styled from "styled-components";

const Footer = styled.div`
  /* position: fixed; */
  width: 100%;
  height: 5%;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Footer };