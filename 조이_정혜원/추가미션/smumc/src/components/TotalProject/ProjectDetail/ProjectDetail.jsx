import { Link } from "react-router-dom";
import POSTER from "/images/demodayposter.webp";
import * as S from "./ProjectDetail.style";
import CardAnimation from "../../AnimatedComponent/CardAnimation";

const ProjectDetail = ({ proj }) => {
  const { id, name, github, release, description, img, member, stack } = proj;
  return (
    <CardAnimation>
      <S.Project key={id}>
        <img src={img ? img : POSTER} />
        <S.Title>
          <h5>
            {name}
            {github ? (
              <Link to={github}>
                <S.GithubIcon />
              </Link>
            ) : null}
            {release ? (
              <Link to={release}>
                <S.ClipIcon />
              </Link>
            ) : null}
          </h5>
        </S.Title>

        <S.Stack>
          {stack.map((s, idx) => (
            <p key={idx}>{s}</p>
          ))}
        </S.Stack>
        <S.Descripton>{description}</S.Descripton>
        <S.Member>
          {member.map((m, idx) => (
            <p key={idx}>{m}</p>
          ))}
        </S.Member>
      </S.Project>
    </CardAnimation>
  );
};

export default ProjectDetail;
