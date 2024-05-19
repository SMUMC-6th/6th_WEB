import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Footer.style";

function Footer() {
  const navigate = useNavigate();

  const handleChangePage = () => {
    // trends페이지로 렌더링
    navigate("/trends");
  };
  return (
    <S.Container>
      <S.footerLink to="/">Todo ⭐️</S.footerLink>
      <S.footerLink onClick={handleChangePage}>Trends ⭐️</S.footerLink>
    </S.Container>
  );
}

export default Footer;
