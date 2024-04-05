import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div``;

const FindBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 450px;

  p {
    color: white;
    font-size: 20px;
    margin-bottom: 20px;
  }

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 200px;
  }

  input {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 7px;
    color: white;
    padding: 7px;
    border: none;

    &:focus {
      outline: none;
    }
  }

  img {
    &:hover {
      cursor: pointer;
    }
  }
`;

export { Container, Wrapper, FindBox };
