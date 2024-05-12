import React from "react";
import * as S from "./CreditBox.style";
export default function CreditBox(props) {
  const { movieCredit } = props; // 객체 배열

  const NoImageURL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s";

  return (
    <S.Container>
      <S.CreditHeader>출연진 정보</S.CreditHeader>
      {movieCredit.map((item) => {
        return (
          <S.PersonWrapper key={item.credit_id}>
            <S.PersonImage
              src={
                item.profile_path
                  ? "https://image.tmdb.org/t/p/original" + item.profile_path
                  : NoImageURL
                //https://image.tmdb.org/t/p/w500/zITaVtFyc4xSM3mxSoPRWHbqgJI.jpg
              }
            ></S.PersonImage>
            <S.PersonText>{item.name}</S.PersonText>
            <S.PersonText>{item.known_for_department}</S.PersonText>
          </S.PersonWrapper>
        );
      })}
    </S.Container>
  );
}
