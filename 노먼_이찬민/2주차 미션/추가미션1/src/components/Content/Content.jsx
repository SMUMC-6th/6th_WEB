// import { useState } from 'react';
import * as S from './Content.style'

// props 쓰려면 컴포넌트 매개변수에 props 넣어주기
const Content = ()=>{
  const imgURL ='https://images.unsplash.com/photo-1711409157399-c30644ca2086?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  

  return (
    <S.Container>
      <S.Hero color='ivory'>HERO</S.Hero>
      <S.BottomContainer color='navy'>
        <S.Main color='skyblue'>MAIN</S.Main>
        <S.SmallContainer>
          <S.Image backgroundImg={imgURL}></S.Image>
          <S.Extra color='orange'>EXTRA</S.Extra>
        </S.SmallContainer>
      </S.BottomContainer>
    </S.Container>
  )
}

export default Content;