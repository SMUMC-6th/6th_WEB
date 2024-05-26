import React from "react";
import * as S from "./Navbar.style";
import logo from "../../assets/logo.png";
import logoText from "../../assets/logo-text.png";
import person from "../../assets/person.png";

function Navbar() {
  return (
    <S.Container>
      <S.leftBox>
        <S.leftBoxLogo src={logo} />
        <S.leftBoxText src={logoText} />
      </S.leftBox>
      <S.rightBox>
        <S.rightBoxText>마이페이지</S.rightBoxText>
        <S.rightBoxPerson src={person} />
      </S.rightBox>
    </S.Container>
  );
}

export default Navbar;
