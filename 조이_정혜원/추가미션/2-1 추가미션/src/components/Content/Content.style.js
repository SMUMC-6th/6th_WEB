import styled from "styled-components";

const Container = styled.div`
  display: grid;

  flex: ${(props) => (props.$click ? "1" : "0")};

  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "hero hero hero hero"
    "main main . content"
    "main main . content"
    "main main . content";

  height: 80%;
  width: 100%;
`;

const Hero = styled.div`
  background-color: rgb(147, 177, 213);
  color: white;

  grid-area: hero;

  display: ${(props) => (props.$click ? "none" : "grid")};
  place-items: center;
`;

const Wrapper = styled.div`
  grid-area: content;
  display: ${(props) => (props.$click ? "none" : "flex")};
  flex-direction: column;
`;

const Main = styled.div`
  background-color: rgb(25, 33, 48);
  color: white;

  grid-area: main;
  display: ${(props) => (props.$click ? "none" : "grid")};
  place-items: center;
`;

const Image = styled.img`
  background-color: rgb(207, 255, 239);

  height: 80%;
`;

const Extra = styled.div`
  background-color: rgb(0, 181, 121);

  display: grid;
  place-items: center;

  height: 20%;
`;

export { Container, Wrapper, Hero, Image, Extra, Main };
