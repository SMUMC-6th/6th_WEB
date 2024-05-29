import styled from "styled-components";
import theme from "../../theme";
import { MdOutlineDarkMode } from "react-icons/md";
import { FaTree } from "react-icons/fa6";
import { IoMenuSharp } from "react-icons/io5";

const Container = styled.div`
  ${theme.ALIGN.ROW_SPACE_BETWEEN}
  position: fixed;
  top: 0;
  z-index: 99;

  width: 100%;
  height: 80px;

  h3 {
    color: #fff;
    font-family: ${theme.FONT.PRETENDARD_BOLD};
    margin-left: 40px;
    letter-spacing: 2px;
    font-size: 20px;
    color: ${(props) => props.theme.primary};
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  margin-right: 30px;
  a {
    margin: 0 15px;
    text-decoration: none;
    color: ${theme.COLOR.GRAY};
    letter-spacing: 0.7px;

    &:hover {
      font-family: "Pretendard-Medium";
      color: ${(props) => props.theme.textColor};
      cursor: pointer;
    }

    &.active {
      font-family: "Pretendard-Medium";
      color: ${(props) => props.theme.textColor};
    }
  }

  @media ${theme.SCREEN_SIZE.TABLET} {
    display: none;
  }
`;

const DarkIcon = styled(MdOutlineDarkMode)`
  color: ${theme.COLOR.GRAY};
  width: 20px;
  height: 20px;
  margin-bottom: -6px;
  margin-right: 5px;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const Lighticon = styled(FaTree)`
  color: #117439;
  width: 19px;
  height: 19px;
  margin-bottom: -6px;
  margin-right: 5px;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const HamBargerWrapper = styled(IoMenuSharp)`
  display: none;
  width: 20px;
  height: 20px;
  color: ${(props) => props.theme.primary};
  margin-right: 20px;
  margin-bottom: 10px;
  cursor: pointer;

  @media ${theme.SCREEN_SIZE.TABLET} {
    display: block;
  }
`;

export { Container, Wrapper, DarkIcon, Lighticon, HamBargerWrapper };
