import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(55, 53, 54);
  color: #fff;
  width: 70%;
  height: 400px;
  border-radius: 20px;

  span {
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 40px;
    font-weight: bold;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  bottom: -100px;

  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export { Container, Wrapper };
