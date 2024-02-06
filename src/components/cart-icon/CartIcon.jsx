import { useDispatch, useSelector } from "react-redux";
import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/cart/cart.selector.js";
import { setIsCartOpen } from "../../store/cart/cart.action.js";

import {
  CartIconContainer,
  ShoppingIcon,
  IconCount,
} from "./cart-icon.styles.js";

const CartIcon = () => {
  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCatOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <CartIconContainer onClick={toggleIsCatOpen}>
      <ShoppingIcon />
      <IconCount>{cartCount}</IconCount>
    </CartIconContainer>
  );
};

export default CartIcon;
