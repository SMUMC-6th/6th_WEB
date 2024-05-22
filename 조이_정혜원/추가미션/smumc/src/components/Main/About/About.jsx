import * as S from "./About.style";
import AboutBox from "./AboutBox/AboutBox";
import codeImg from "../../../assets/code.webp";
import smileImg from "../../../assets/smile.webp";
import codeLight from "../../../assets/code_light.webp";
import smileLight from "../../../assets/smile_light.webp";
import { MEMBERS } from "../../../constants/members";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const About = () => {
  const allMemberCount = MEMBERS.length;
  const currMemberCount = MEMBERS.filter((m) => m.year === 6).length;
  const { nowTheme } = useContext(ThemeContext);

  return (
    <S.Container>
      <S.RImg src={nowTheme ? codeImg : codeLight} />
      <S.LImg src={nowTheme ? smileImg : smileLight} />
      <S.ContextWrapper>
        <h1>SMUMC</h1>
        <S.TextWrapper>
          <S.TextBox>스터디</S.TextBox>
          <S.TextBox>해커톤</S.TextBox>
          <S.TextBox>아이디어톤</S.TextBox>
          <S.TextBox>데모데이</S.TextBox>
          <S.TextBox2>파트별 컨퍼런스</S.TextBox2>
        </S.TextWrapper>
        <S.TextWrapper2>
          <S.TextBox3>열쩡</S.TextBox3>
          <S.TextBox3>열쩡</S.TextBox3>
          <S.TextBox3>열정</S.TextBox3>
        </S.TextWrapper2>
      </S.ContextWrapper>
      <S.Wrapper>
        <div>
          <AboutBox title={"누적 활동 인원 🧑‍💻"} text={`${allMemberCount} 명`} />
          <AboutBox title={"현재 활동 회원 🏃🏻‍♀️"} text={`${currMemberCount} 명`} />
          <AboutBox title={"운영 기수 🕢"} text={"6 기"} />
        </div>
      </S.Wrapper>
    </S.Container>
  );
};

export default About;
