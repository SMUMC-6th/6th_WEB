import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  height: 60px;
  width: 100%;

  background-color: rgb(9, 11, 19, 0.85);

  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 4%;
    margin-bottom: 8px;
    margin-left: 20px;

    &:hover {
      cursor: pointer;
    }
  }
`;

const NavContainer = styled.div`
  display: flex;

  a {
    text-decoration: none;
    letter-spacing: 3px;
    font-size: 13px;
    color: rgb(242, 245, 255, 0.8);

    padding-right: 22px;

    &:hover {
      color: rgb(250, 233, 100, 0.95);
      cursor: pointer;
      transform: scale(1.1);
      text-shadow: 0 0 5px rgba(250, 233, 100, 0.6);
    }

    &.active {
      color: rgb(250, 233, 100, 0.95);
    }
  }
`;

export { Container, NavContainer };
