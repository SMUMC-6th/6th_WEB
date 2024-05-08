import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 100px;

  &:hover {
    img {
      transform: scale(1.05);
    }

    p {
      color: rgba(126, 247, 205);
    }

    cursor: grab;
  }

  p {
    text-align: center;
    font-size: 11px;
    margin-top: 10px;
    opacity: 0.8;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

export { Container };
