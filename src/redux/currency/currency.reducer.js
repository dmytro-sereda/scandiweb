import CurrencyActionTypes from "./currency.types";

const INITIAL_STATE = {
  isHidden: true,
};

const CurrencyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CurrencyActionTypes.TOGGLE_CURRENCY_HIDDEN:
      return { ...state, isHidden: !state.isHidden };
    default:
      return state;
  }
};

export default CurrencyReducer;
