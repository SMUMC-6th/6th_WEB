import * as S from "./Content.style";
import Iams from "../../assets/test.jpg";

const Content = ({ click }) => {
  return (
    <S.Container $click={click}>
      <S.Hero $click={click}>HERO</S.Hero>
      <S.Main $click={click}>MAIN</S.Main>
      <S.Wrapper $click={click}>
        <S.Image src={Iams} alt="img" />
        <S.Extra>EXTRA</S.Extra>
      </S.Wrapper>
    </S.Container>
  );
};

export default Content;
