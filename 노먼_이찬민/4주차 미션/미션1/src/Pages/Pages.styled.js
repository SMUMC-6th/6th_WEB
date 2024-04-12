import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 10px;
  flex-wrap: wrap; // 반응성 추가
  /* background-color: navy; */
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  background-color: rgb(90, 90, 130);
`;

// 키 프레임 정의
const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

// 스타일드 컴포넌트를 사용하여 스피너 스타일 정의
const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #333;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: ${spin} 2s linear infinite; // 애니메이션 적용
`;

export { Container, Spinner };
