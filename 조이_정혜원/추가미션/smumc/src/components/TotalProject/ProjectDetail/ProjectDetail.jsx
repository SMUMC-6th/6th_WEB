import { Link } from "react-router-dom";
import POSTER from "/images/demodayposter.webp";
import * as S from "./ProjectDetail.style";

const ProjectDetail = ({ proj }) => {
  return (
    <S.Project key={proj.id}>
      <img src={proj.img ? proj.img : POSTER} />
      <S.Title>
        <h5>
          {proj.name}
          {proj.github ? (
            <Link to={proj.github}>
              <S.GithubIcon />
            </Link>
          ) : null}
          {proj.release ? (
            <Link to={proj.release}>
              <S.ClipIcon />
            </Link>
          ) : null}
        </h5>
      </S.Title>

      <S.Stack>
        {proj.stack.map((s, idx) => (
          <p key={idx}>{s}</p>
        ))}
      </S.Stack>
      <S.Descripton>{proj.description}</S.Descripton>
      <S.Member>
        {proj.member.map((m, idx) => (
          <p key={idx}>{m}</p>
        ))}
      </S.Member>
    </S.Project>
  );
};

export default ProjectDetail;
