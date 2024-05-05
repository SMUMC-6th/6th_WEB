import React from "react";
import * as S from "./DetailPage.style";
import { useLocation } from "react-router-dom";

function DetailPage() {
  // useLocation()로 location 객체를 받아올 수 있음
  const location = useLocation();
  // Link로 넘긴 props 받아서 사용하기
  const receivedData = location.state.data;
  console.log(receivedData);
  const overviewEmptyCheck = receivedData.overview.length;

  // 스타일드 컴포넌트 내부에 그냥 props로 텍스트 표현을 하고싶을때는 {}로 감싸기
  return (
    // <div>안녕</div>
    <S.Container>
      <S.Top>
        <S.TopImage src={receivedData.poster}></S.TopImage>
      </S.Top>
      <S.Bottom>
        <div>{receivedData.title}</div>
        <div>{"⭐".repeat(Math.floor(receivedData.voteAverage))}</div>
        {overviewEmptyCheck ? (
          <div>{receivedData.overview}</div>
        ) : (
          <div>TMDB에서 제공하는 API에 상세 정보가 없습니다.</div>
        )}
      </S.Bottom>
    </S.Container>
  );
}

export default DetailPage;
