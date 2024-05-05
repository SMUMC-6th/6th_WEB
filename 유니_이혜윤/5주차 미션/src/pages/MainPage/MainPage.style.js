import styled, { keyframes } from "styled-components";

const popUp = keyframes`
  0% { transform: scale(0); opacity: 0; }
  60% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); }
`;

const MainContainer = styled.div`
  width: 100%;
  height: calc(100vh - 80px - 45px); // 헤더와 푸터 높이를 제외한 높이
  padding-top: 80px; // 헤더 높이만큼 상단 여백
  padding-bottom: 45px; // 푸터 높이만큼 하단 여백
  color: white;
  font-weight: bold;
  box-sizing: border-box;
`;

const MainTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 50%;
  background-color: #010001;
  font-size: 30px;
  p {
    animation: ${popUp} 0.3s ease-out;
  }
`;

const MainBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 70%;
  background-color: #202144;
  font-size: 30px;

  input {
    width: 280px;
    padding: 8px;
    margin: 20px 10px;
    font-size: 16px;
    border-radius: 25px;
    outline: none;
  }
`;


export {MainContainer, MainTop, MainBottom, popUp}