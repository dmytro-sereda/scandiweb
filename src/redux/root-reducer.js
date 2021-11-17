import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import CartReducer from "./cart/cart.reducer";
import CurrencyReducer from "./currency/currency.reducer";
import ShopReducer from "./shop/shop.reducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  cart: CartReducer,
  currency: CurrencyReducer,
  shop: ShopReducer,
});

export default persistReducer(persistConfig, rootReducer);
