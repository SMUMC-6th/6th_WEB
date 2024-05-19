import React from "react";
import { NotfoundContainer } from "../style/NotFound.style";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <NotfoundContainer>
      <h1>Oops!</h1>
      <h2>예상치 못한 에러가 발생했습니다 ;'^'</h2>
      <h3>Not Found</h3>
      <h4 onClick={() => navigate("/")}>메인으로 이동하기</h4>
    </NotfoundContainer>
  );
}