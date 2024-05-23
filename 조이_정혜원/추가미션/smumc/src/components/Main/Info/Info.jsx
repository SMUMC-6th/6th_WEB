import * as S from "./Info.style";
import Logo from "../../../assets/main-logo.webp";
import LogoLight from "../../../assets/main-light-logo.webp";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const Info = () => {
  const { nowTheme } = useContext(ThemeContext);

  return (
    <S.Container>
      <S.Img src={nowTheme ? Logo : LogoLight} />
      <div>
        <h1>
          <b>U</b>niversity <b>M</b>akeUs <b>C</b>hallenge
        </h1>
        <p>
          <b>앱&웹 서비스 런칭</b>에 <b>도전</b>하는 대학생 IT 연합동아리
        </p>
        <button>7기 모집예정</button>
      </div>
    </S.Container>
  );
};

export default Info;
