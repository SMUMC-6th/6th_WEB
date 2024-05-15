import * as S from "./Navbar.style";
// import { ReactComponent as Logo } from "../../assets/Images/logo.svg";
// import { ReactComponent as Hamburger } from "../../assets/Images/menu-hamburger.svg";

function Navbar() {
  return (
    <S.NavbarContainer>
      <S.HeaderContainer>
        <S.HeaderImage src="https://www.save-tax.co.kr/_next/image?url=%2Fassets%2Flogo.svg&w=384&q=75"></S.HeaderImage>
      </S.HeaderContainer>
      <S.CategoryContainer>
        <S.Category>서비스</S.Category>
        <S.Category>혜택</S.Category>
        <S.Category>요금안내</S.Category>
        <S.Category>유용한 자료</S.Category>
        <S.Category>무료법인설립</S.Category>
        <S.Category>오시는 길</S.Category>
      </S.CategoryContainer>
      <S.ConsultingStartButton>무료상담 신청하기</S.ConsultingStartButton>
      {/* <S.MenuButton><Hamburger></Hamburger></S.MenuButton> */}
    </S.NavbarContainer>
  );
}

export default Navbar;
