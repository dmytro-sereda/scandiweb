import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCurrentItem = createSelector(
  [selectShop],
  (shop) => shop.currentItem
);

export const selectMainPicture = createSelector(
  [selectShop],
  (shop) => shop.currentItemMainPicture
);
