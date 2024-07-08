import { useSelector } from "react-redux"
import * as S from "./Navbar.style"
import { BsCart4 } from "react-icons/bs";

const Navbar = () => {
  const totalCount = useSelector((state) => state.cart.totalCount);

  return (
    <S.Navbar>
      <S.Title>
        UMC PlayList
      </S.Title>
      <div>
        <BsCart4 style={{ fontSize: '25px', color: 'white'}}/>
        <p>{isNaN(totalCount) ? '0' : totalCount.toString()}</p>
      </div>
    </S.Navbar>
  )
}

export default Navbar;