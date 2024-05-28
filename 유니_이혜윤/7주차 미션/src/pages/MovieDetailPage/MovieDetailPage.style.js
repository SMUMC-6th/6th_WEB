import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 3rem);
  display: block;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  gap: 80px; 

  overview-y: auto;

  @media (max-width: 768px) {
    margin-top: 50px;
    gap: 40px;
  }

  @media (max-width: 480px) {
    margin-top: 30px;
    gap: 20px;
  }
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  gap: 80px; 

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    gap: 40px;
  }

  @media (max-width: 480px) {
    padding-top: 30px;
    gap: 20px;
  }
`;

export const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  opacity: 0.4; /* 배경 이미지의 투명도 */
`;

const ImageContainer = styled.div`
  flex: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  @media (max-width: 768px) {
    flex: 100%;
  }
`;

const MainImage = styled.img`
  width: 100%;
  max-width: 400px;
  margin-left: 100px;

  @media (max-width: 768px) {
    margin-left: 0;
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
    color: ;
  }

  @media (max-width: 768px) {
    flex: 100%;
    width: 50%;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 20px;
    }

    p {
      width: 100%;
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    h1 {
      font-size: 18px;
    }

    p {
      width: 100%;
      font-size: 12px;
    }
  }
`;

const Credit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    margin-top: 50px;
  }

  @media (max-width: 480px) {
    margin-top: 30px;
  }

  h2 {
    text-align: center;
    margin-top: 100px;

    @media (max-width: 768px) {
      margin-top: 0;
      width: 80%;
    }

    @media (max-width: 480px) {
      margin-top: 0;
      width: 100%;
    }
  }
`;

export {Container, Info, ImageContainer, MainImage, DetailContainer, Credit}