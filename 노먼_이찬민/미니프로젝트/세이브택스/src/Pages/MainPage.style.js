import styled from "styled-components";
// import { Headers } from "@nestjs/common";

// 가장 뼈대가 되는 구조는 px로 정의하는 게 맞는거같기도..?

const Container = styled.div`
  width: 100%;
  /* height: 100%; */
  background-color: white;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  /* overflow-y: scroll; */
`;

const FirstBox = styled.div`
  width: 92%;
  height: 44%;
  background-color: #eff0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  margin-top: 40px;
`;

const FirstInBox = styled.div`
  width: 80%;
  height: 100%;
  padding-left: 250px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const FirstInBoxText = styled.div`
  font-size: 56px;
  font-weight: 600;
  /* display: flex; */
`;

const FirstInBoxButton = styled.button`
  width: 280px;
  height: 65px;
  border-radius: 50px;
  background-color: black;
  color: azure;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 18px;
  font-weight: 600;
`;

const FirstFloatBox = styled.div`
  width: 90%;
  height: 40%;
  /* background-color: #eff0f0; */
  display: flex;
  position: relative;
  bottom: -12%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

const FloatItem = styled.div`
  width: 28%;
  height: 200px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  word-break: keep-all;
`;

const FloatItemHeader = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  font-size: 20px;
  font-weight: 600;
`;

const FloatItemText = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  color: gray;
`;

const DownArrow = styled.img`
  margin-top: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SecondBox = styled.div`
  width: 90vw;
  height: 50vh;
  margin-left: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const SecondBoxTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const SecondBoxText = styled.div`
  font-size: 40px;
  font-weight: 600;
`;
const SecondBoxCategoriesContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 150px;
  margin-right: -70px;
`;
const SecondBoxCategoriesItem = styled.div`
  .Header {
    margin-right: 100px;
    margin-bottom: 10px;
    color: gray;
    font-size: 18px;
    font-weight: 600;
  }

  .Descript {
    margin-bottom: 30px;
    color: blue;
    font-size: 56px;
    font-weight: 600;
  }
`;

const ThirdBox = styled.div`
  width: 70vw;
  height: 50vh;
  margin-left: 70px;
  margin-top: 20vh;

  .HeaderContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5vh;
  }

  .Header {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 600;
  }

  .HeaderPoint {
    color: blue;
    font-size: 24px;
    font-weight: 600;
  }

  .LogoContainer {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Logo {
    width: 12.5%;
    height: 50%;
  }
`;

const FourthBox = styled.div`
  width: 70vw;
  height: 50vh;
  margin-left: 70px;
  margin-top: 20vh;

  .Category {
  }

  .Header {
  }
`;

export {
  Container,
  FirstBox,
  FirstInBox,
  FirstInBoxText,
  FirstInBoxButton,
  FirstFloatBox,
  FloatItem,
  FloatItemHeader,
  FloatItemText,
  DownArrow,
  SecondBox,
  SecondBoxTextContainer,
  SecondBoxText,
  SecondBoxCategoriesContainer,
  SecondBoxCategoriesItem,
  ThirdBox,
  FourthBox,
};
