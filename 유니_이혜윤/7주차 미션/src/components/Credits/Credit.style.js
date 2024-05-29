import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contetn: center;
  align-items: center;

  width: 100px;
  height: 100px;

  p {
    font-size: 10px;
    margin-top: 10px;
    opacity: 0.8;
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    opacity: 1;
  }

  @media (max-width: 768px) {
    width: 80%;
    height: 80px;

    p {
      font-size: 8px;
      margin-top: 8px;
    }

    img {
      width: 50px;
      height: 50px;
    }
  }

  @media (max-width: 480px) {
    width: 60%;
    height: 60px;

    p {
      font-size: 6px;
      margin-top: 6px;
    }

    img {
      width: 40px;
      height: 40px;
    }
`;

export {Container}