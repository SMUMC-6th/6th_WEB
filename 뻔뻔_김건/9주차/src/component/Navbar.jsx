import { NavbarContainer, LogoBox, NavbarItem } from "./Cart.style";
import { CartIcon } from "../constants/icons";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { calculateTotals } from "../redux/cartSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const amount = useSelector((state) => state.cart.amount);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <NavbarContainer>
      <LogoBox>
        <h1>UMC PlayList</h1>
      </LogoBox>
      <NavbarItem>
        {amount}
        <CartIcon />
      </NavbarItem>
    </NavbarContainer>
  );
}