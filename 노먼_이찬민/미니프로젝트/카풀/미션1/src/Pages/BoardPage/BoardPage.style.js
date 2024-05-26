import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const BoardBox = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SearchBox = styled.div``;

const BoardBoxHeader = styled.h1``;
const BoardBoxPostContainer = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;
  border-top: 3px solid black;
  border-bottom: 1.5px solid black;
`;
const BoardBoxPageButton = styled.button`
  width: 30px;
  height: 30px;
  border: none;
`;

const SearchBoxInput = styled.input``;
const SearchBoxButton = styled.button``;
const SearchBoxWritingButton = styled.button``;

export {
  Container,
  BoardBox,
  SearchBox,
  BoardBoxHeader,
  BoardBoxPostContainer,
  BoardBoxPageButton,
  SearchBoxInput,
  SearchBoxButton,
  SearchBoxWritingButton,
};
