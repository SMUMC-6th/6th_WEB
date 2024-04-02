import styled from "styled-components";

const noImageURL = 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg';

const Container = styled.div`
  width: 100%;
  height: 90%;
  display: ${(props) => props.display};
`

const Hero = styled.div`
  width: 100%;
  height: 25%;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
`;

// main smallContainer 묶기
const BottomContainer = styled.div`
  width: 100%;
  height: 75%;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: 
    "main main . smallContainer"
    "main main . smallContainer"
    "main main . smallContainer"
    "main main . smallContainer";
  
`;

const Main = styled.div`
  grid-area: main;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
`;

// image Extra 플렉스로 묶기
const SmallContainer = styled.div`
  grid-area: smallContainer;
  /* width: 25%;
  height: 100%; */
  display: flex;
  flex-direction: column;
`;

const Image = styled.div`
  grid-area: img;
  background: url(${(props) => props.backgroundImg});
  background-size: 100% 100%;
  width: 100%;
  height: 80%;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

const Extra = styled.div`
  grid-area: extra;
  width: 100%;
  height: 20%;
  background-color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Container, Hero, BottomContainer, Main, SmallContainer, Image, Extra };