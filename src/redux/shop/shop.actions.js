import ShopActionTypes from "./shop.types";

export const updateCollections = (collections) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collections,
});

export const updateCurrentItem = (item) => ({
  type: ShopActionTypes.UPDATE_CURRENT_ITEM,
  payload: item,
});
