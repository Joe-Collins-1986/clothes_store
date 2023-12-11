import { useContext } from "react";

import {
  CartIconContainer,
  ShoppingIcon,
  IconCount,
} from "./cart-icon.styles.js";

import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCatOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCatOpen}>
      <ShoppingIcon />
      <IconCount>{cartCount}</IconCount>
    </CartIconContainer>
  );
};

export default CartIcon;
