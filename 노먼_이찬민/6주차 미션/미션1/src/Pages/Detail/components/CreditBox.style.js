import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const CreditHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PersonWrapper = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 5px; */
`;
const PersonImage = styled.img`
  width: 80%;
  height: 80%;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PersonText = styled.div`
  width: 100%;
  height: 20%;
  /* color: black; */
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Container, CreditHeader, PersonWrapper, PersonImage, PersonText };
