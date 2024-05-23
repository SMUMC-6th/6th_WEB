import styled from "styled-components";
import theme from "../../theme";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px 20px;
  width: 80%;
`;

const SelectBox = styled.section`
  margin-bottom: 30px;
  ${theme.FONT.PRETENDARD_MEDIUM};
  ${theme.ALIGN.COLUMN_CENTER};
`;

const Select = styled.button`
  ${theme.FONT.PRETENDARD_BOLD};
  ${theme.ALIGN.ROW_SPACE_BETWEEN};
  padding: 0 20px;
  width: 250px;
  height: 40px;
  border-radius: 10px;
  font-size: 15px;
  background-color: inherit;
  color: ${(props) => props.theme.textColor};
  border: 1.5px solid ${(props) => (props.theme === theme.darkTheme ? props.theme.secondary : props.theme.primary)};

  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
  }

  @media ${theme.SCREEN_SIZE.MOBILE} {
    width: 200px;
  }
`;

const ArrowIcon = styled(MdKeyboardArrowDown)`
  width: 20px;
  height: 20px;
`;

const ArrowIconUp = styled(MdKeyboardArrowUp)`
  width: 20px;
  height: 20px;
`;

const Option = styled.ul`
  overflow: hidden;
  font-size: 15px;
  display: ${(props) => (props.$click ? "block" : "none")};
  width: 100%;
  height: 100%;
  border-radius: 10px;
  color: ${(props) => props.theme.textColor};
  border: 1.5px solid ${(props) => (props.theme === theme.darkTheme ? props.theme.secondary : props.theme.primary)};

  li {
    list-style-type: none;
    text-align: center;
    padding: 10px;

    &:hover {
      cursor: pointer;
      background-color: ${(pros) => pros.theme.primary};
      color: ${(pros) => (pros.theme === theme.darkTheme ? "inherit" : "#fff")};
    }
  }
`;

export { Container, SelectBox, Select, Option, ArrowIcon, ArrowIconUp };
