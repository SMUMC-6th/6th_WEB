import { useState } from "react";
import * as S from "./ProjectDetail.style";

const ProjectDetail = ({ project }) => {
  const [isHover, setIsHover] = useState(false);
  const { name, description, year, member, stack } = project;
  return (
    <S.Container onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} $isHover={isHover}>
      <div>
        <span className="title">{name}</span>
        <span>{description}</span>
        <S.MemberWrapper>
          {member.map((mem, i) => (
            <li key={i}>{mem}</li>
          ))}
        </S.MemberWrapper>
      </div>
    </S.Container>
  );
};

export default ProjectDetail;
