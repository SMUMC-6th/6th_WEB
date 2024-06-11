import CardAnimation from "../../AnimatedComponent/CardAnimation";
import * as S from "./MemberDetail.style";
import MAN from "/images/man.png";
import WOMAN from "/images/woman.png";
import { Link } from "react-router-dom";

const MemberDetail = ({ member }) => {
  const githubURL = `https://github.com/${member.github}`;

  return (
    <CardAnimation>
      <S.Container>
        <Link to={githubURL}>
          <S.GithubIcon />
        </Link>
        <img src={member.sex === "w" ? WOMAN : MAN} />
        <S.Text>
          <p>{member.name}</p>
          <span>{`${member.year}기 ${member.part}`}</span>
        </S.Text>
      </S.Container>
    </CardAnimation>
  );
};

export default MemberDetail;
