import * as S from './MainPage.styled'

const MainPage = () => {
  return (
    <S.Container>
      <S.TopWrapper>환영합니다</S.TopWrapper>
      <S.BottomWrapper>
        <S.SearchLabel>Find your movie!</S.SearchLabel>
        <S.SearchInput></S.SearchInput>
      </S.BottomWrapper>
    </S.Container>
  )
}

export default MainPage