import * as S from "./Footer.style";
import { FaInstagram } from "react-icons/fa6";
import { IoChatbubblesOutline } from "react-icons/io5";
import { GrLocationPin } from "react-icons/gr";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";
import { CONTECT_INFOS } from "../../constants/info";

const Footer = () => {
  return (
    <S.Container>
      <S.TextWrapper>
        <h3>SMUMC</h3>
        <p>{CONTECT_INFOS[1].data}</p>
      </S.TextWrapper>
      <S.IconWrapper>
        <S.InfoWrapper>
          <div>
            <GrLocationPin />
            <p>서울특별시 종로구 홍지문2길 20 상명대학교</p>
          </div>
          <div>
            <CiMail />
            <p>{CONTECT_INFOS[0].data}</p>
          </div>
        </S.InfoWrapper>
        <div>
          <Link to={CONTECT_INFOS[2].data}>
            <IoChatbubblesOutline />
          </Link>
          <Link to={CONTECT_INFOS[3].data}>
            <FaInstagram />
          </Link>
        </div>
      </S.IconWrapper>
    </S.Container>
  );
};

export default Footer;
