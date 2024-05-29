import styled from "styled-components";

const SideBar = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-250px')};
  width: 300px;
  height: 100%;
  background-color: rgba(0,0,0,0.8); 
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform:  ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease;
  z-index: 1000;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 10px;
  
  & li {
    margin: 30px;
  }
`;

export {SideBar, MenuList}