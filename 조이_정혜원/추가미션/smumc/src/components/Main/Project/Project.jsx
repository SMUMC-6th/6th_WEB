import * as S from "./Project.style";
import { PROJECTS } from "../../../constants/projects";
import { useState } from "react";
import noImg from "/images/demodayposter.webp";
import ProjectDetail from "./ProjectDetail/ProjectDetail";

const Project = () => {
  const [animate, setAnimate] = useState(true);
  const onStop = () => setAnimate(false);
  const onRun = () => setAnimate(true);

  return (
    <S.Container>
      <h1>PROJECTS</h1>
      <h4>University MakeUs Challenge 데모데이 프로젝트 - SMUMC</h4>
      <S.SliderContainer>
        <S.SliderWrapper onMouseEnter={onStop} onMouseLeave={onRun}>
          <S.Original $animate={animate}>
            {PROJECTS.map((project) => (
              <S.ProjectBox key={project.id}>
                <img src={project.img ? project.img : noImg} alt={project.name} />
                <p>{project.name}</p>
                <ProjectDetail project={project} />
              </S.ProjectBox>
            ))}
          </S.Original>
          <S.Copy $animate={animate}>
            {PROJECTS.map((project) => (
              <S.ProjectBox key={project.id}>
                <img src={project.img ? project.img : noImg} alt={project.name} />
                <p>{project.name}</p>
                <ProjectDetail project={project} />
              </S.ProjectBox>
            ))}
          </S.Copy>
        </S.SliderWrapper>
      </S.SliderContainer>
      <S.GoWrapper to="/projects">더 많은 프로젝트 보러가기 →</S.GoWrapper>
    </S.Container>
  );
};

export default Project;
