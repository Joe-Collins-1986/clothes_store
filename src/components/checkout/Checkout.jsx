import { useContext } from "react";
import "./checkout.styles.scss";

import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
  const { cartItems, addItemToCart } = useContext(CartContext);

  return (
    <div>
      <h1>This is the checkout page</h1>
      {cartItems.map((item) => {
        const { id, name, quantity, price } = item;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <span>{quantity}</span>
            <br />
            <span>decrement</span>
            <br />
            <span onClick={() => addItemToCart(item)}>increment</span>
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
