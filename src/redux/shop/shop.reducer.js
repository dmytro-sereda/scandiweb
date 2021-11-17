import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: [],
  currentItem: {},
};

const ShopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return { ...state, collections: action.payload };
    case ShopActionTypes.UPDATE_CURRENT_ITEM:
      return { ...state, currentItem: action.payload };
    default:
      return state;
  }
};

export default ShopReducer;
