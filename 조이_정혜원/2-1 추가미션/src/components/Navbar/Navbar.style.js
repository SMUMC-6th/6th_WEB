import styled from "styled-components";

const Container = styled.div`
  display: flex;

  height: 10%;
`;

const Header = styled.div`
  background-color: black;
  color: white;

  display: grid;
  place-items: center;

  width: 20%;
  flex-grow: 2;
`;
const Menu = styled.div`
  background-color: red;
  color: white;

  display: grid;
  place-items: center;

  width: 80%;
`;

const Btn = styled.button`
  border: 1px solid black;
  background-color: white;
  border-radius: 5px;
  height: 25px;
  opacity: 0.85;

  font-weight: bold;
`;

export { Container, Header, Menu, Btn };
