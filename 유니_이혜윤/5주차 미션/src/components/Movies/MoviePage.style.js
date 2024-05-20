import styled from "styled-components";
const Container = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; 
  padding: 50px;
  background-color: #1f1f45;
  margin-top: 80px;
`;

const Movielist = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1700px; /* 최대 너비를 설정 */
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1f1f45;
  color: white;
  
  button {
    margin: 0 10px;
    padding: 5px;
    background-color: white;
    border: none;
    border-radius: 30px;
    cursor: pointer;
  }
`;

const Content = styled.div `
  position: relative;
  background-color: #313362;
  width: 240px;
  height: 400px;
  border-radius: 5px; 
  overflow: hidden;

  img {
    width: 100%; 
    height: 85%;
    margin-bottom: 10px;
    object-fit: cover;
    object-position: center;
  }

  &:hover  {
    opacity: 0.3;
  }
`;

const Info = styled.div `
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 15%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5); /* 배경 투명도 */
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
  position: absolute; /* 영화 이미지 위에 상세 설명 */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6); /* 어두운 배경 추가 */
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  opacity: 0; 
  transition: opacity 0.3s ease-in-out; /* 부드러운 효과 */
  overflow-y: auto;

  &:hover {
    opacity: 1;
  }
`;

const MovieBox = styled.div`
  text-align: center;

  h2 {
    margin-bottom: 10px;
  }
  
  p{
    font-size: 14px;
  }
`;

export {Container, Movielist, Content, Info, MovieOverview, MovieBox, Pagination}