import styled from "styled-components";

const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  height: 60px;

  background-color: rgb(9, 11, 19, 0.85);

  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px;

  img {
    width: 4%;
    margin-bottom: 2px;

    &:hover {
      cursor: pointer;
    }
  }
`;

const NavContainer = styled.div`
  display: flex;

  span {
    padding: 0 13px;
    letter-spacing: 3px;
    font-size: 13px;
    color: rgb(242, 245, 255, 0.8);

    &:hover {
      color: rgb(250, 233, 100, 0.95);
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`;

export { Container, NavContainer };
