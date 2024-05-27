import styled from "styled-components";

export const FindDiv = styled.div`
  display: flex;
  background-color: #000035;
  min-height: 50vh;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const FindContainer = styled.div``;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  font-size: 40px;
  margin: 15px;
  color: white;

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Input = styled.input`
  width: 500px;
  height: 50px;
  margin: 12px 0px 5px 0px;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 80%;
    height: 40px;
  }

  @media (max-width: 480px) {
    width: 90%;
    height: 35px;
  }
`;

export const MovieBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  place-items: center;
  overflow-y: auto;
  width: 1000px;
  height: 30vh;
  border-radius: 20px;
  background-color: #062863;
  padding: 10px;

  &::-webkit-scrollbar {
    width: 13px;
  }

  &::-webkit-scrollbar-thumb {
    background: white;
  }

  @media (max-width: 768px) {
    width: 90%;
    grid-template-columns: repeat(2, 1fr);
    height: auto;
  }

  @media (max-width: 480px) {
    width: 100%;
    grid-template-columns: 1fr;
    height: auto;
  }
`;
