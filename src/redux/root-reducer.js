import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import CartReducer from "./cart/cart.reducer";
import CurrencyReducer from "./currency/currency.reducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  cart: CartReducer,
  currency: CurrencyReducer,
});

export default persistReducer(persistConfig, rootReducer);
