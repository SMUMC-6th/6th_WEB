import { styled } from "styled-components";

const Container = styled.div`
  height: 750px;

  display: grid;
  place-items: center;
`;

const Wrapper = styled.div`
  color: #fff;

  display: grid;
  place-items: center;

  p {
    margin-bottom: 20px;
  }

  button {
    border: none;
    border-radius: 5px;
    font-size: 12px;
    height: 25px;
    width: 110px;

    &:hover {
      cursor: pointer;
      transform: scale(0.95);
    }
  }
`;

export { Container, Wrapper };
