import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TopWrapper = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(10, 10, 10);
  color: white;
  font-weight: bold;
  font-size: 20px;
`;

const BottomFormWrapper = styled.form`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(50, 50, 100);
`;

const SearchLabel = styled.div`
  font-size: 30px;
  font-weight: bolder;
  color: aliceblue;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 15px;
`;

const searchItemsContainer = styled.div`
  margin-top: 20px;
  width: 70%;
  height: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: auto;
  background-color: ${(props) =>
    props.isSearchSubmitted ? "rgb(70, 70, 120)" : "rgb(50, 50, 100)"};

  &::-webkit-scrollbar {
    width: 8px; /* 스크롤 바의 너비 */
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(21, 194, 177, 0.5); /* 스크롤 바 색상 */
    border-radius: 4px; /* 스크롤 바의 모서리 반경 */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.7); /* 스크롤 바 호버 시 색상 */
  }
`;

export {
  Container,
  TopWrapper,
  BottomFormWrapper,
  SearchLabel,
  SearchInput,
  searchItemsContainer,
};
