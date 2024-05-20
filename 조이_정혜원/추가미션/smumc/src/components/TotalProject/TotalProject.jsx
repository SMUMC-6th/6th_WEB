import * as S from "./TotalProject.style";
import { PROJECTS } from "../../constants/projects";
import ProjectDetail from "./ProjectDetail/ProjectDetail";

const TotalProject = ({ year }) => {
  if (year === "All") {
    return (
      <S.Container>
        {PROJECTS.map((proj) => (
          <ProjectDetail proj={proj} key={proj.id} />
        ))}
      </S.Container>
    );
  } else {
    return (
      <S.Container>
        {PROJECTS.filter((proj) => proj.year === year).map((proj) => (
          <ProjectDetail proj={proj} key={proj.id} />
        ))}
      </S.Container>
    );
  }
};

export default TotalProject;
