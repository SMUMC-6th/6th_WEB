import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  height:80vh;
  background-color: #0E0F37;
`;

export const DetailImg = styled.img`
  margin: 50px;
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
`;

export const DetailCast = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  place-items: center;
  overflow-y: scroll;
  background-color: #0E0F37;
  color:white;
  height: 20vh;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 40px;
  }
`;

export const DetailCredit = styled.div`
  color:white;
  text-align:center;
  background-color: #0E0F37;
`;
