import React from "react";
import * as S from "./BoardPage.style";
import BoardPost from "./components/BoardPost";

function BoardPage() {
  return (
    <S.Container>
      <S.BoardBox>
        <S.BoardBoxHeader>문의 게시판</S.BoardBoxHeader>
        <S.BoardBoxPostContainer>
          <BoardPost
            id="No"
            title="제목"
            writer="작성자"
            writeTime="작성시간"
            views="조회수"
            isHeader="true"
            isHighlight="true"
          />
          <BoardPost
            id="1"
            title="긴것도 테스트를 해봐야지 않겠어?"
            writer="chanmin"
            writeTime="2024-05-27"
            views="1"
            isHighlight="true"
          />
          <BoardPost
            id="1"
            title="test"
            writer="chanmin"
            writeTime="2024-05-27"
            views="1"
            isHighlight="true"
          />
          <BoardPost
            id="1"
            title="test"
            writer="chanmin"
            writeTime="2024-05-27"
            views="1"
          />
          <BoardPost
            id="1"
            title="test"
            writer="chanmin"
            writeTime="2024-05-27"
            views="1"
          />
          <BoardPost
            id="1"
            title="test"
            writer="chanmin"
            writeTime="2024-05-27"
            views="1"
          />
          <BoardPost
            id="1"
            title="test"
            writer="chanmin"
            writeTime="2024-05-27"
            views="1"
          />
          <BoardPost
            id="1"
            title="test"
            writer="chanmin"
            writeTime="2024-05-27"
            views="1"
          />
          <BoardPost
            id="1"
            title="test"
            writer="chanmin"
            writeTime="2024-05-27"
            views="1"
          />
          <BoardPost
            id="1"
            title="test"
            writer="chanmin"
            writeTime="2024-05-27"
            views="1"
          />
        </S.BoardBoxPostContainer>
      </S.BoardBox>
      <S.BoardBoxPageButton>➡️</S.BoardBoxPageButton>
      <S.SearchBox>
        <S.SearchBoxInput></S.SearchBoxInput>
        <S.SearchBoxButton>🔍</S.SearchBoxButton>
        <S.SearchBoxWritingButton>글쓰기</S.SearchBoxWritingButton>
      </S.SearchBox>
    </S.Container>
  );
}

export default BoardPage;
