import React from "react";
import * as S from './MovieItem.style'

// 각 page mount마다 실행되면서 prop를 통해 정보를 받아옴
function MovieItem(props){
  const imageUrl = props.poster ? `https://image.tmdb.org/t/p/w500/${props.poster}` : '';

  return(
    <S.Item>
      <S.Image src={imageUrl}></S.Image>
      <S.TitleVote>
        <S.Span>{props.title}</S.Span>
        <S.Paragrape>{props.voteAverage}</S.Paragrape>
      </S.TitleVote>
    </S.Item>
  );
}

export default MovieItem;