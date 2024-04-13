import React from "react";
import { Link } from "react-router-dom";
import * as S from "./NotFoundPage.style";

const NotFoundPage = () => {
  return (
    <S.Container>
      <S.Header>!!! 잘못된 주소입니다 !!!</S.Header>
      <S.Header>메인 페이지로 돌아가려면 아래 버튼을 눌러주세요</S.Header>
      <Link to="/">
        <S.Button>메인으로 돌아가기</S.Button>
      </Link>
    </S.Container>
  );
};

export default NotFoundPage;
