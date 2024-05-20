import * as S from "./ProjectPage.style";
import { PROJECTS_YEAR } from "../../constants/projects";
import { useState } from "react";
import { TotalProject } from "../../components";

const ProjectPage = () => {
  const [select, setSelected] = useState("All");
  return (
    <S.Container>
      <S.Wrapper>
        <h1>PROJECT</h1>
        <S.Text>
          SMUMC 맴버들이 참여한 <br />
          다양한 프로젝트를 확인해 보세요!
        </S.Text>
        <S.Select>
          {PROJECTS_YEAR.map((e, idx) => (
            <span key={idx} onClick={() => setSelected(e)} className={e === select ? "selected" : ""}>
              {e !== "All" ? `${e}기` : e}
            </span>
          ))}
        </S.Select>
        <S.ProJect>
          <TotalProject year={select} />
        </S.ProJect>
      </S.Wrapper>
    </S.Container>
  );
};

export default ProjectPage;
