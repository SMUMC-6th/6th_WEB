import React, { useEffect } from "react";
import TodoList from "../../components/Todo/TodoList";
import getPosts from "../../Hooks/getPosts";
import { useState } from "react";
import * as S from "./TrendsPage.style";

export default function TrendsPage() {
  const [trendsTodo, setTrendsTodo] = useState([]);
  const [page, setPage] = useState(1);
  const [take, setTake] = useState(10);
  const { PostItem, total } = getPosts(page, take);

  // PostItem(getHook으로 가져온 정보)가 변할때마다(받아질때마다) useEffect로 감지하고 trendsTodo만들기
  useEffect(() => {
    setTrendsTodo(PostItem);
  }, [PostItem]);
  // console.log(PostItem, total);
  // const [totalPageNumber, setTotalPageNumber] = useState(0 + total / take); // take = 10
  const totalPageNumber = total / 10;
  // console.log(page, totalPageNumber, take);

  const buttons = [...new Array(totalPageNumber + 1).keys()].slice(1);
  const buttonsList = buttons.map((item) => (
    <S.pagenationButton
      key={item}
      onClick={() => {
        setPage(item);
        setTrendsTodo(getPosts(item).PostItem);
      }}
    >
      {item}
    </S.pagenationButton>
  ));

  // console.log(buttonsList);

  return (
    <S.TrendsPageContainer>
      <TodoList todos={trendsTodo} setTodos={setTrendsTodo} />
      <S.PagenationBarContainer>
        <S.pagenationPrevButton
          onClick={() => {
            setPage(page - 1);
            console.log(page);
            setTrendsTodo(getPosts(page).PostItem);
          }}
        >
          뒤로
        </S.pagenationPrevButton>
        {buttonsList}
        <S.pagenationNextButton
          onClick={() => {
            setPage(page + 1);
            console.log(page);
            setTrendsTodo(getPosts(page).PostItem);
          }}
        >
          앞으로
        </S.pagenationNextButton>
      </S.PagenationBarContainer>
    </S.TrendsPageContainer>
  );
}
