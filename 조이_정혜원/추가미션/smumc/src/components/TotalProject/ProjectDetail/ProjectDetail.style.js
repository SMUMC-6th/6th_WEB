import theme from "../../../theme";
import { IoLogoGithub } from "react-icons/io";
import { AiOutlinePaperClip } from "react-icons/ai";
import styled from "styled-components";

const Project = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.footerColor};
  border-radius: 15px;
  overflow: hidden;
  width: 280px;
  height: 370px;
  margin: 10px;

  img {
    width: 100%;
    height: 55%;
    object-fit: cover;
  }
`;

const Title = styled.div`
  ${theme.ALIGN.ROW_SPACE_BETWEEN};

  margin: 15px 15px 10px;

  h5 {
    ${theme.ALIGN.ROW_CENTER};
    color: ${theme.COLOR.GRAY};
    font-family: ${theme.FONT.PRETENDARD_BOLD};
    font-size: 15px;
  }

  a {
    ${theme.ALIGN.ROW_CENTER};
    text-decoration: none;
    color: inherit;
  }
`;

const GithubIcon = styled(IoLogoGithub)`
  margin-left: 5px;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.primary};
  }
`;

const ClipIcon = styled(AiOutlinePaperClip)`
  margin-left: 5px;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.primary};
  }
`;

const Member = styled.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
  width: 230px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3px;
  p {
    font-size: 11px;
  }
`;

const Stack = styled.div`
  display: flex;
  margin-left: 10px;

  p {
    ${theme.FONT.PRETENDARD_MEDIUM};
    font-size: 11px;
    border-radius: 10px;
    padding: 3px 10px;
    margin-right: 5px;
    background-color: ${(props) =>
      props.theme === theme.darkTheme ? "rgb(1, 255, 111, 0.1)" : "rgb(17, 116, 57, 0.7)"};
    color: ${(props) => (props.theme === theme.darkTheme ? props.theme.primary : "#fff")};
  }
`;

const Descripton = styled.div`
  width: 230px;
  margin: 12px 15px 0px;
  font-size: 13px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export { Project, Title, GithubIcon, ClipIcon, Member, Stack, Descripton };
