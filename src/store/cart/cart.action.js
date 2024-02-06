import { CART_ACTIONS_TYPES } from "./cart.types";

export const setIsCartOpen = (boolean) => ({
  type: CART_ACTIONS_TYPES.SET_IS_CART_OPEN,
  payload: boolean,
});

////HELPER FUNCTIONS FOR ACTION CREATORS////

const addCartItem = (cartItems, productToAdd) => {
  //find if cart contains product to add?
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  //if found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //return new array with modified cartItems/new cart Items
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  //find cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  //if quanity is equal to 1, if true remove item
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  //return back cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) => {
  //filter to exclude cart item
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};

//////CREATE ACTIONS WITH PAYLOAD BEING DEFINED BY ABOVE HELPER FUNCTIONS///////

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return {
    type: CART_ACTIONS_TYPES.SET_CART_ITEMS,
    payload: newCartItems,
  };
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return {
    type: CART_ACTIONS_TYPES.SET_CART_ITEMS,
    payload: newCartItems,
  };
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return {
    type: CART_ACTIONS_TYPES.SET_CART_ITEMS,
    payload: newCartItems,
  };
};
