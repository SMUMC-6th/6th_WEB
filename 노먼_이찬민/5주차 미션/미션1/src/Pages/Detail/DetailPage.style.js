import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgb(90, 90, 130);
  gap: 10px;
`;

const Top = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopImage = styled.img`
  width: 30%;
  height: 100%;
`;

const Bottom = styled.div`
  width: 60%;
  height: 40%;
  display: flex;
  gap: 30px;
  flex-direction: column;
  flex-wrap: wrap;
  word-break: keep-all;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  color: white;
  /* font-size: 24px; */
  font-weight: 600;
`;

export { Container, Top, TopImage, Bottom };
