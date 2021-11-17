import CurrencyActionTypes from "./currency.types";

const INITIAL_STATE = {
  isHidden: true,
  currentCurrency: "USD",
  currentCurrencySymbol: "$",
};

const CurrencyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CurrencyActionTypes.TOGGLE_CURRENCY_HIDDEN:
      return { ...state, isHidden: !state.isHidden };
    case CurrencyActionTypes.CHANGE__CURRENCY:
      return {
        ...state,
        isHidden: true,
        currentCurrency: action.payload.newCur,
        currentCurrencySymbol: action.payload.symbol,
      };
    default:
      return state;
  }
};

export default CurrencyReducer;
