import styled from "styled-components";

const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  height: 60px;
  background-color: #090b13;
  color: rgb(242, 245, 255, 0.8);
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px;

  div {
    color: rgb(242, 245, 255);

    &:hover {
      cursor: pointer;
    }
  }

  span {
    padding: 0 13px;
    &:hover {
      color: rgb(242, 245, 255, 1);
      cursor: pointer;
      transform: scale(1.1);
      transition-duration: 600ms;
    }
  }
`;

const NavContainer = styled.div`
  display: flex;
  div {
    padding: 0 10px;
  }
`;

export { Container, NavContainer };
