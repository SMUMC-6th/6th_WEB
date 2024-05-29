import styled from "styled-components";
import theme from "../../../theme";
import { IoLogoGithub } from "react-icons/io";

const Container = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
  position: relative;
  background-color: ${(props) => props.theme.footerColor};
  margin: 20px;
  border-radius: 10px;
  width: 200px;
  height: 300px;

  img {
    width: 105px;
    height: 105px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 40px;
    border: 1.5px solid ${(props) => props.theme.bgColor};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Text = styled.div`
  text-align: center;
  p {
    font-family: ${theme.FONT.PRETENDARD_BOLD};
    font-size: 18px;
    margin-bottom: 3px;
  }

  span {
    font-size: 13px;
    color: ${(props) => props.theme.primary};
    opacity: 0.8;
  }
`;

const GithubIcon = styled(IoLogoGithub)`
  position: absolute;
  top: 10px;
  right: 10px;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.primary};
  }
`;

export { Container, Text, GithubIcon };
