import styled from "styled-components";

const SearchItemsContainer = styled.div`
  margin-top: 20px;
  width: 70%;
  height: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: auto;
  /* background-color: ${(props) =>
    props.isSearchSubmitted ? "rgb(70, 70, 120)" : "rgb(50, 50, 100)"}; */

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

export { SearchItemsContainer };
