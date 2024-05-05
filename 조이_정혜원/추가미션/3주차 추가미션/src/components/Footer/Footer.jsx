import { useNavigate } from "react-router-dom";
import * as S from "./Footer.style";

const Footer = () => {
  const nav = useNavigate();
  return (
    <S.Container>
      <S.Button onClick={() => nav("/")}>Todos</S.Button>
      <S.Button onClick={() => nav("/trends")}>Trends</S.Button>
      <S.Button>미숀!</S.Button>
    </S.Container>
  );
};

export default Footer;
