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
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 250px;
    height: 350px;
  }

  @media (max-width: 767px) {
    width: 200px;
    height: 300px;
  }
`;
const PersonImage = styled.img`
  width: 80%;
  height: 80%;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PersonText = styled.div`
  width: 100%;
  height: 20%;
  /* color: black; */
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) and (max-width: 1023px) {
    font-size: 14px;
  }

  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

export { Container, CreditHeader, PersonWrapper, PersonImage, PersonText };
