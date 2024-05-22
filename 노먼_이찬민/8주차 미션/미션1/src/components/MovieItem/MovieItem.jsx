import React from "react";
import * as S from "./MovieItem.style";
import { Link } from "react-router-dom";
import { getMovieEngTitle } from "../../Hooks/getMovieEngTitle";
import noImage from "../../assets/No-Image.png";

// 각 page mount마다 실행되면서 prop를 통해 정보를 받아옴
function MovieItem(props) {
  const imageUrl = props.poster
    ? `https://image.tmdb.org/t/p/w500/${props.poster}`
    : "";
  const myData = {
    id: props.id,
    poster: imageUrl,
    title: props.title,
    overview: props.overview,
    voteAverage: props.voteAverage,
  };

  // 5주차 추가내용 - MainPage의 검색 결과용 scale을 props으로 받아서 스타일 컴포넌트 따로 관리
  const scales = {
    width: props.width,
    height: props.height,
  };

  // 5주차 추가내용 - 영화 포스터가 없을 때 이미지 변경
  const imageErrorHandler = (e) => {
    e.target.src =
      "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg";
  };

  // 영어제목 가져와서 URL 뒤에 붙임
  // const movieEngTitle = getMovieEngTitle(props.id).movieEngTitle;

  // 동적 라우팅 - id로
  const linkURL = `/movie/${props.id}`;

  // 평점은 2자리수까지만 표시하기, 너무많으니까 눈아픔
  // 포스터에 링크 달아보기! -> myData에 필요 정보를 담아놓고 Link props state로 전달하기
  return (
    <S.Item width={scales.width} height={scales.height}>
      <S.LLink to={linkURL} state={{ data: myData }}>
        {/* 링크 보낼때, state 속성에 데이터 속성을 가진 객체를 보낸다. */}
        <S.Image src={imageUrl} onError={imageErrorHandler}></S.Image>
      </S.LLink>
      <S.TitleVote>
        <S.Span>{props.title}</S.Span>
        <S.Paragraph>⭐{props.voteAverage.toFixed(2)}</S.Paragraph>
      </S.TitleVote>
    </S.Item>
  );
}

export default MovieItem;
