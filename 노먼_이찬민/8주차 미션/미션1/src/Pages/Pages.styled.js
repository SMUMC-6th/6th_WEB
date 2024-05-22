import styled, { keyframes } from "styled-components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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

const PagenationBar = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 70px;
  font-size: 18px;
  font-weight: 500;
  color: azure;
`;

const PageControlButton = styled.button`
  background-color: rgb(90, 90, 130);
  border: none;
`;

const PrevIcon = styled(FaArrowLeft)`
  color: ${(props) => props.color};
`;

const NextIcon = styled(FaArrowRight)`
  color: ${(props) => props.color};
`;

export {
  Container,
  Spinner,
  PagenationBar,
  PageControlButton,
  PrevIcon,
  NextIcon,
};
