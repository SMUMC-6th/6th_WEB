import styled, { css, keyframes } from "styled-components";
import theme from "../../../theme";
import { MdKeyboardArrowDown } from "react-icons/md";

const open = keyframes`
    from {
        transform: rotate(0)
    }

    to {
        transform: rotate(180deg);
    }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 10px;
`;

const Question = styled.div`
  margin-bottom: ${(props) => (props.$isOpen ? "150px" : "")};
  transition: all 400ms 0s ease-in-out;
  cursor: pointer;
  padding: 0px 50px;
  ${theme.ALIGN.ROW_SPACE_BETWEEN};
  font-family: ${theme.FONT.PRETENDARD_MEDIUM};
  font-size: 17px;

  width: 100%;
  height: 95px;

  background-color: ${(props) => props.theme.footerColor};
  border-radius: 15px;

  span {
    width: 75%;
    word-break: keep-all;
    letter-spacing: 0.3px;
  }

  &:hover {
    svg {
      color: ${(props) => props.theme.primary};
      transform: scale(1.05);
    }
  }

  @media ${theme.SCREEN_SIZE.TABLET} {
    font-size: 15px;
    span {
      width: 70%;
    }
  }

  @media ${theme.SCREEN_SIZE.MOBILE} {
    font-size: 13px;
    height: 110px;
    span {
      width: 80%;
    }
  }
`;

const Answer = styled.div`
  position: absolute;
  top: 95px;
  left: 0;
  opacity: ${(props) => (props.$isOpen ? "1" : "0")};
  height: ${(props) => (props.$isOpen ? "150px" : "0px")};

  transition: height 400ms 0s ease-in-out;
  ${theme.ALIGN.ROW_CENTER};
  margin-bottom: 10px;
  width: 100%;
  background-color: ${(props) => props.theme.footerColor};
  border-radius: 15px;

  span {
    width: 85%;
    font-size: 15px;
    word-break: keep-all;
  }

  @media ${theme.SCREEN_SIZE.TABLET} {
    span {
      font-size: 14px;
    }
  }

  @media ${theme.SCREEN_SIZE.MOBILE} {
    span {
      width: 75%;
      font-size: 12px;
    }
  }
`;

const DownIcon = styled(MdKeyboardArrowDown)`
  animation: ${(props) =>
    props.$isOpen
      ? css`
          ${open} 400ms 0s ease-in forwards
        `
      : ""};

  width: 20px;
  height: 20px;

  &:hover {
    color: ${(props) => props.theme.primary};
    transform: scale(1.05);
  }
`;

export { Container, Question, Answer, DownIcon };
