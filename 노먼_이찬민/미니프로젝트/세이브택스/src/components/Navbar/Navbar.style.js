import styled from "styled-components";

const NavbarContainer = styled.div`
  width: 100%;
  height: 10%;
  /* margin: 0 auto; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid gainsboro;
  border-bottom: 1px solid gainsboro;
  background-color: white;
`;

const HeaderContainer = styled.div`
  width: 15%;
  height: 90%;
  /* margin-right: 5%; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderImage = styled.img`
  width: 75%;
  /* height: 100px; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CategoryContainer = styled.ul`
  display: flex;
  gap: 45px;
  list-style: none;
  margin-right: 100px;
`;

const Category = styled.li`
  font-size: 16px;
  font-weight: 550;
`;

const ConsultingStartButton = styled.button`
  width: 10.5%;
  height: 55%;
  margin-right: 20px;
  border-radius: 6px;
  box-shadow: 5px;
  font-size: 15px;
  font-weight: 700;
  background-color: black;
  color: azure;
`;

const MenuButton = styled.div``;

export {
  NavbarContainer,
  HeaderContainer,
  HeaderImage,
  CategoryContainer,
  Category,
  ConsultingStartButton,
  MenuButton,
};
