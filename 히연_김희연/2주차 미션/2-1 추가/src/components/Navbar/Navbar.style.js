import styled from "styled-components";

const Container = styled.div`
  display: flex;
  top: 0;
  width: 100%;
  height: 8%;
`;

const Header = styled.div`
  width: 100%;
  background-color: #0f1629;
  color: white;
  display: grid;
  place-items: center;
`;

const Menu = styled.div`
  width: 100%;
  background-color: #ee3d4d;
  color: white;
  display: grid;
  place-items: center;
`;

const Button = styled.button`
  border-radius: 8px;
  border: none;
  background-color: #febfc9;
  color: white;
  height: 20px;
`;

export { Container, Header, Menu, Button };
