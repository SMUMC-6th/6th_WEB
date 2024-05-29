import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const leftBox = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
`;

const leftBoxLogo = styled.img`
  width: 70px;
  height: 70px;
  margin-top: -10px;
  margin-right: 8px;
`;

const leftBoxText = styled.img`
  width: 45%;
  height: 22px;
`;

const rightBox = styled.div`
  width: 20%;
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rightBoxText = styled.p`
  font-size: 18px;
  font-weight: 550;
  /* margin-top: -6px; */
  margin-right: 10px;
`;

const rightBoxPerson = styled.img`
  width: 60px;
  height: 60px;
  /* margin-top: 20px; */
`;

export {
  Container,
  leftBox,
  leftBoxLogo,
  leftBoxText,
  rightBox,
  rightBoxPerson,
  rightBoxText,
};
