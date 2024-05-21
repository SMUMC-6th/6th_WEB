import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-height: 600px;

  p {
    font-size: 20px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  max-height: 600px;

`;

const Box = styled.div`
  position: relative;
  background-color: #313362;
  width: 230px;
  height: 380px;
  border-radius: 5px;


  img {
    width: 100%; 
    height: 80%;
    object-fit: cover;
    object-position: center;
  }

  h3 {
    font-size: 13px;
    padding: 0 10px 0 10px;
    color: white;
  }
`;


const Hover = styled.div`
  position: absolute; /* 영화 이미지 위에 상세 설명 */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  
  opacity: 0; 
  transition: opacity 0.3s ease-in-out; /* 부드러운 효과 */
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0; /* 스크롤바 너비를 0으로 설정하여 숨김 */
  }

  &:hover {
    opacity: 1;
  }

  h2 {
    font-size: 23px;
    margin-bottom: 15px;
  }

  p {
    font-size: 15px;
  }
`;

export {Container, Content, Box,  Hover}