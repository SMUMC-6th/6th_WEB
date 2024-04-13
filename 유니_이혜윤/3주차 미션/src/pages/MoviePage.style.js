import styled from "styled-components";
const Container = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; 
  padding: 50px; /* 헤더와 푸터를 제외한 내용에 여백을 추가합니다. */
  background-color: #1f1f45;
  margin-top: 80px;
`;

const Movielist = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* 열 너비를 200px로 설정하고, 화면 크기에 따라 열 수가 자동으로 조정되도록 합니다. */
  gap: 30px; /* 그리드 아이템 간의 간격을 설정합니다. */
  width: 100%; /* movielist의 너비를 최대로 설정합니다. */
  max-width: 1500px; /* 최대 너비를 설정하여 너무 넓어지는 것을 방지합니다. */
`;

const Content = styled.div `
  position: relative;
  background-color: #313362; /* 각 영화 항목의 배경 색상을 설정합니다. */
  width: 240px;
  height: 400px;
  border-radius: 5px; /* 모서리를 둥글게 합니다. */
  overflow: hidden;

  img {
    width: 100%; /* 이미지 너비를 컨테이너에 맞춥니다. */
    height: 85%;
    margin-bottom: 10px; /* 이미지와 제목 사이의 간격을 설정합니다. */
    object-fit: cover;
    object-position: center;
  }

  &:hover  {
    opacity: 0.3;
  }
`;

const Info = styled.div `
  display: flex; /* 플렉스박스 레이아웃 적용 */
  align-items: center; /* 자식 요소들을 세로 중앙 정렬 */
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5); /* 배경 투명도 조절 */
  color: white;
  opacity: 1; /* 초기 투명도 */
  transition: opacity 0.3s ease;

  h3 {
    color: white;
    font-size: 14px;
    width: 80%;   /* 80%는 제목 */
    margin: 5px 7px 5px 13px;
  }

  div {
    display: flex;
    align-items: center;
    width: 20%;   /* 20%는 평점 */
    margin: 0 40px 4px 8px;
  }

  span {
    margin-right: 5px;
  }
`;

const MovieOverview = styled.div`
  position: absolute; /* 영화 이미지 위에 상세 설명이 오도록 절대 위치를 사용합니다. */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7); /* 어두운 배경을 추가하여 텍스트가 돋보이도록 합니다. */
  color: white;
  padding: 20px; /* 내부 여백을 추가합니다. */
  display: flex;
  flex-direction: column;
  justify-content: start; /* 내용을 수직 중앙에 위치시킵니다. */
  align-items: center; /* 내용을 수평 중앙에 위치시킵니다. */
  opacity: 0; /* 기본적으로 보이지 않도록 설정합니다. */
  transition: opacity 0.3s ease-in-out; /* 부드러운 효과를 위해 transition을 추가합니다. */
  overflow-y: auto;

  &:hover {
    opacity: 1;
  }
`;

const MovieBox = styled.div`
  text-align: center; /* 텍스트를 중앙 정렬합니다. */

  h2 {
    margin-bottom: 10px;
  }
  
  p{
    font-size: 14px;
  }
`;

export {Container, Movielist, Content, Info, MovieOverview, MovieBox}