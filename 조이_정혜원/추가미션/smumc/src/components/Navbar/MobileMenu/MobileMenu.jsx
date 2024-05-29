import { NavLink } from "react-router-dom";
import * as S from "./MobileMenu.style";
import { MenuContext } from "../../../context";
import { useContext } from "react";

const MobileMenu = () => {
  const { isOpen, handleOpen } = useContext(MenuContext);

  return (
    <S.Container $isOpen={isOpen}>
      <NavLink to="/projects" onClick={handleOpen}>
        project
      </NavLink>
      <hr />
      <NavLink to="/members" onClick={handleOpen}>
        member
      </NavLink>
      <hr />
      <NavLink to="/notices" onClick={handleOpen}>
        notice
      </NavLink>
      <hr />
      <div>
        <S.Close onClick={handleOpen} />
      </div>
    </S.Container>
  );
};

export default MobileMenu;
