import styled from "styled-components";


const Container = styled.div`
  display: flex;
  position: fixed;
  top:0; left:0;
  width: 100%;
  height: 10%;
  `;

const Header = styled.div`
  background-color: #0f1629;
  width: 25%;
  display:grid;
  place-items: center;
`;

const Menu = styled.div`
  background-color: #ef3d4d;
  width: 75%;
  display:grid;
  place-items: center;
`;

const MenuButton = styled.button`
  background-color: pink;
  color: white;
  border: none;
  border-radius: 5px;

  width: 130px;
  height: 30px;
  cursor:pointer;

  &:hover {   // MenuBuuton 컴포넌트에 마우스 호버 상태
    transform: scale(0.95);
`;


export {Container, Header, Menu, MenuButton}