import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 80vh;
  background-color: #0E0F37;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const DetailImg = styled.img`
  margin: 50px;
  max-width: 100%;
  height: auto;

  @media (max-width: 768px) {
    margin: 20px;
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const DetailContext = styled.div`
  margin: 100px;
  color: white;

  h1 {
    font-size: 55px;
  }

  h2 {
    font-size: 40px;
    display: grid;
    gap: 4px;
  }

  h3 {
    font-size: 30px;
  }

  @media (max-width: 768px) {
    margin: 20px;
    text-align: center;

    h1 {
      font-size: 35px;
    }

    h2 {
      font-size: 25px;
    }

    h3 {
      font-size: 20px;
    }
  }
`;

export const DetailCast = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  place-items: center;
  overflow-y: scroll;
  background-color: #0E0F37;
  color: white;
  height: 20vh;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const DetailCredit = styled.div`
  color: white;
  text-align: center;
  background-color: #0E0F37;
`;
