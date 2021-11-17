import CurrencyActionTypes from "./currency.types";

export const toggleCurrency = () => ({
  type: CurrencyActionTypes.TOGGLE_CURRENCY_HIDDEN,
});

export const changeCurrency = ({ newCur, symbol }) => ({
  type: CurrencyActionTypes.CHANGE__CURRENCY,
  payload: { newCur, symbol },
});
