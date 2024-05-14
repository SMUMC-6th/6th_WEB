import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import theme from "../../styles/theme";

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div``;

const FindWrapper = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};
`;

const FindBox = styled.div`
  ${theme.ALIGN.COLUMN_CENTER};

  height: 200px;

  p {
    color: white;
    font-size: 20px;
    margin-bottom: 20px;
  }

  div {
    ${theme.ALIGN.ROW_SPACE_AROUND};
    width: 200px;
  }

  input {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 7px;
    color: white;
    padding: 7px;
    border: none;

    &:focus {
      outline: none;
    }
  }
`;

const searchImg = styled(FaSearch)`
  color: #fff;
  margin-bottom: 3px;

  &:hover {
    cursor: pointer;
  }
`;

const SearchBox = styled.div`
  ${theme.ALIGN.GRID_CENTER};
  border: 2px solid rgba(0, 0, 0, 0.2);
  background-color: rgba(0, 0, 0, 0.2);

  overflow-y: auto;

  margin-bottom: 100px;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(126, 247, 205, 0.5);
    border-radius: 20px;
    height: 40%;
  }

  &::-webkit-scrollbar-track {
    background: rgba(249, 249, 249, 0.1);
  }
`;

export { Container, FindWrapper, Wrapper, FindBox, searchImg, SearchBox };
