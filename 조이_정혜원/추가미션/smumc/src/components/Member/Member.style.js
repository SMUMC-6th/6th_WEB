import styled from "styled-components";
import theme from "../../theme";
import { MdKeyboardArrowDown } from "react-icons/md";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
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
  width: 170px;
  height: 40px;
  border-radius: 10px;
  font-size: 15px;
  background-color: inherit;
  color: ${(props) => props.theme.textColor};
  border: 1px solid ${(props) => props.theme.secondary};

  margin-bottom: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const ArrowIcon = styled(MdKeyboardArrowDown)`
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
  border: 1px solid ${(props) => props.theme.secondary};

  li {
    list-style-type: none;
    text-align: center;
    padding: 10px;

    &:hover {
      cursor: pointer;
      background-color: ${(pros) => pros.theme.primary};
      color: ${(pros) => (pros.theme === theme.darkTheme ? "" : "#fff")};
    }
  }
`;

export { Container, SelectBox, Select, Option, ArrowIcon };
