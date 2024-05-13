import React from "react";
import * as S from "./DetailPage.style";
import { useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "../../Hooks/getMovieDetails";
import { getMovieCredit } from "../../Hooks/getMovieCredit";
import CreditBox from "./components/CreditBox";

function DetailPage() {
  // useLocation()로 location 객체를 받아올 수 있음
  const location = useLocation();

  // Link로 넘긴 props 받아서 사용하기
  const receivedData = location.state.data;
  const overviewEmptyCheck = receivedData.overview.length;
  // const detailMovieId = receivedData.id;

  // 6주차 피드백 1 : useParams 사용해서 URL 동적라우팅 파라미터 가져오기
  const detailMovieId = useParams().id;
  const { movieDetails } = getMovieDetails(detailMovieId); // 객체.속성
  const { movieCredit } = getMovieCredit(detailMovieId); // 객체 배열

  // 스타일드 컴포넌트 내부에 그냥 props로 텍스트 표현을 하고싶을때는 {}로 감싸기
  return (
    <S.Container>
      <S.Top>
        <S.TopImage src={receivedData.poster}></S.TopImage>
      </S.Top>
      <S.Bottom>
        <div>{receivedData.title}</div>
        <div>{"⭐".repeat(Math.floor(receivedData.voteAverage))}</div>
        <div>{"개봉일: " + movieDetails.release_date}</div>
        {overviewEmptyCheck ? (
          <div>{receivedData.overview}</div>
        ) : (
          <div>TMDB에서 제공하는 API에 상세 정보가 없습니다.</div>
        )}
        <CreditBox movieCredit={movieCredit}></CreditBox>
      </S.Bottom>
    </S.Container>
  );
}

export default DetailPage;
