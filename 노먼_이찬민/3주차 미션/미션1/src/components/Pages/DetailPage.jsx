import React from 'react'
import * as S from './DetailPage.style'

function DetailPage(props) {
  console.log(props);
  // Link로 넘긴 props 받아서 사용하기
  const receivedData = props.location.state;
  console.log(receivedData);

  // 스타일드 컴포넌트 내부에 그냥 props로 텍스트 표현을 하고싶을때는 {}로 감싸기 
  return (
    <S.Container>
      <S.Top bgImg={receivedData.poster}></S.Top>
      <S.Bottom>
        <div>{receivedData.title}</div>
        <div>{receivedData.overview}</div>
      </S.Bottom>
    </S.Container>
  )
}

export default DetailPage
