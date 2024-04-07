import styled from "styled-components";

const Container = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* 뷰포트 높이의 100%를 최소 높이로 설정하여, 메인 컨텐츠가 항상 화면을 채우도록 합니다. */
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
  background-color: #313362; /* 각 영화 항목의 배경 색상을 설정합니다. */
  width: 240px;
  height: 400px;
  border-radius: 5px; /* 모서리를 둥글게 합니다. */

  img {
    width: 100%; /* 이미지 너비를 컨테이너에 맞춥니다. */
    height: 85%;
    margin-bottom: 10px; /* 이미지와 제목 사이의 간격을 설정합니다. */
    object-fit: cover;
    object-position: center;
  }
`;

const Info = styled.div `
  display: flex; /* 플렉스박스 레이아웃 적용 */
  align-items: center; /* 자식 요소들을 세로 중앙 정렬 */

  h3 {
    color: white;
    font-size: 14px;
    width: 80%;   /* 80%는 제목 */
    margin: 0 7px 5px 13px;
  }

  div {
    display: flex;
    align-items: center;
    width: 20%;   /* 20%는 평점 */
    margin: 0 20px 4px 8px;
  }

  span {
    margin-right: 5px;
  }
`;

export {Container, Movielist, Content, Info}