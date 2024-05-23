import styled from "styled-components";
import { FaTree } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";
import theme from "../theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  background-color: ${(props) => props.theme.bgColor};
  transition-property: background-color;
  transition-timing-function: ease-in;
  transition-duration: 400ms;

  color: ${(props) => props.theme.textColor};
`;

const ContentWrapper = styled.div`
  flex: 1;
  margin-top: 20px;
`;

const ThemeIcon = styled.div`
  display: none;
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: ${(props) => props.theme.footerColor};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: 1px solid rgb(133, 133, 133, 0.2);
  cursor: pointer;

  @media ${theme.SCREEN_SIZE.TABLET} {
    ${theme.ALIGN.COLUMN_CENTER};
  }
`;

const Tree = styled(FaTree)`
  color: #117439;
  width: 19px;
  height: 19px;
`;

const Dark = styled(MdDarkMode)`
  color: #f2de5a;
  width: 19px;
  height: 19px;
`;

export { Container, ContentWrapper, ThemeIcon, Tree, Dark };
