import styled from "styled-components";
import { FaPlus } from "react-icons/fa";

const NavbarContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: aliceblue;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h1`
  /* font-family: ; */
`;

const InputContainer = styled.div`
  display: flex;
  width: 90%;
  height: 20%;
`;

const InputBox = styled.input`
  width: 90%;
  border-radius: 10px;
`;

const SubmitIcon = styled(FaPlus)``;

export {
  NavbarContainer,
  HeaderContainer,
  Header,
  InputContainer,
  InputBox,
  SubmitIcon,
};
