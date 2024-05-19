import styled from "styled-components";

export const FindDiv = styled.div`
  display: flex;
  background-color: #000035;
  height: 50vh;
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
`;
export const Input = styled.input`
  width: 500px;
  height: 50px;
  margin: 12px 0px 5px 0px;
  border-radius: 10px;
`;

export const MovieBox = styled.div`
  display: none;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  place-items: center;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 13px;
  }

  &::-webkit-scrollbar-thumb {
    background: white;
  }
  width: 1000px;
  height: 30vh;
  border-radius: 20px;
  background-color: #062863;
`;