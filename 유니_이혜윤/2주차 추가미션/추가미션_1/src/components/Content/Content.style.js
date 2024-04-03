import styled from "styled-components";

const Content = styled.div`
  width: 100%;
  height: 80%;
  display: grid;

  flex: ${(props) => (props.$click ? "1" : "0")};

  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-template-areas: 
  "a a a a"
  "a a a a"
  "b b . d"
  "b b . e"
  ;`;

const Hero = styled.div`
  grid-area: a;
  background-color: #4685ca;
  display: ${(props) => (props.$click ? "none" : "grid")};
  place-items: center;`;

const Main = styled.div`
  grid-area: b;
  background-color: #24344b;
  display: ${(props) => (props.$click ? "none" : "grid")};
  place-items: center;
`;

const Image = styled.div`
  grid-area: d;
  display: ${(props) => (props.$click ? "none" : "grid")};
`;

const Extra = styled.div`
  grid-area: e;
  background-color: #4dbd97;
  display: ${(props) => (props.$click ? "none" : "grid")};
  place-items: center;`;

export {Content, Hero, Main, Image, Extra}