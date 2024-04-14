import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  gap: 80px; 
`;

const ImageContainer = styled.div`
  flex: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    max-width: 400px;
    margin-left: 100px;
  }
`;

const DetailContainer = styled.div`
  flex: 50%;
  display: flex;
  flex-direction: column; /* 세로 나열 */
  justify-content: flex-start; 
  gap: 20px; 

  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    width: 80%;
    font-size: 16px;
    color: #666;
  }
`;

export {Container, ImageContainer, DetailContainer}