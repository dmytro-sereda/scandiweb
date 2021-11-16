import CartActionTypes from "./cart.types";
import { addItem } from "./cart.utils";

const INITIAL_STATE = {
  isHidden: true,
  cartItems: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM_TO_CART:
      return { ...state, cartItems: addItem(action.payload, state.cartItems) };
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, isHidden: !state.isHidden };
    default:
      return state;
  }
};

export default CartReducer;
