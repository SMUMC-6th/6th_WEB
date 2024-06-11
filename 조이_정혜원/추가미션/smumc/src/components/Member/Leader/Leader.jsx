import { Link } from "react-router-dom";
import * as S from "../MemberDetail/MemberDetail.style";
import * as SS from "./Leader.style";
import MAN from "/images/man.png";
import WOMAN from "/images/woman.png";
import CardAnimation from "../../AnimatedComponent/CardAnimation";

const Leader = ({ leader }) => {
  const githubURL = `https://github.com/${leader.github}`;
  return (
    <CardAnimation>
      <S.Container>
        <Link to={githubURL}>
          <S.GithubIcon />
        </Link>
        <SS.CrownIcon />
        <img src={leader.sex === "w" ? WOMAN : MAN} />
        <SS.Position>{leader.position}</SS.Position>
        <S.Text>
          <p>{leader.name}</p>
          <span>{`${leader.year}기 ${leader.part}`}</span>
        </S.Text>
      </S.Container>
    </CardAnimation>
  );
};

export default Leader;
