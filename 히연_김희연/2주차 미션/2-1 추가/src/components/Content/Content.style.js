import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 80%;
  flex: 1;
  top: 8%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "a a a a"
    "a a a a"
    "b b . c "
    "b b . d";
`;

const Hero = styled.div`
  grid-area: a;
  background-color: #4c86c6;
  color: white;
  display: grid;
  place-items: center;
`;

const Main = styled.div`
  grid-area: b;
  background-color: #23344b;
  color: white;
  display: grid;
  place-items: center;
`;

const Image = styled.img`
  grid-area: c;
  width: 100%;
  height: 100%;
`;

const Extra = styled.div`
  grid-area: d;
  background-color: #4dbd96;
  color: white;
  display: grid;
  place-items: center;
`;

export { Container, Hero, Main, Image, Extra };
