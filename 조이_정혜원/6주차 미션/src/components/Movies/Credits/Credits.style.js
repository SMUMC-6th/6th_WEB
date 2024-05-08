import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  margin: 10px;

  width: 1000px;
  height: 50%;

  @media screen and (max-width: 768px) {
    width: 550px;
  }
`;

const CreditWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  margin: 0px 30px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(126, 247, 205, 0.5);
    border-radius: 20px;
    height: 40%;
  }

  &::-webkit-scrollbar-track {
    background: rgba(249, 249, 249, 0.1);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export { Wrapper, CreditWrapper };
