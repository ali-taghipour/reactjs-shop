import { CartTypes } from "./cart.types";

export const toggleCartHidden = cart => ({
  type: CartTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
  type: CartTypes.ADD_ITEM,
  payload: item
});

export const clearItem = item => ({
  type: CartTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const removeItem = item => ({
  type: CartTypes.REMOVE_ITEM,
  payload: item
});
