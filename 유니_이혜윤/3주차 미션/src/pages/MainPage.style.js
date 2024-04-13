import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: calc(100vh - 80px - 45px); // 헤더와 푸터 높이를 제외한 높이
  padding-top: 80px; // 헤더 높이만큼 상단 여백
  padding-bottom: 45px; // 푸터 높이만큼 하단 여백
  color: white;
  font-weight: bold;
  box-sizing: border-box; // 패딩을 포함한 높이로 계산
`;

const MainTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 50%;
  background-color: #010001;
  font-size: 25px;
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
    margin-top: 20px;
    font-size: 16px;
    border-radius: 25px;
    outline: none;
  }
`;


export {MainContainer, MainTop, MainBottom}