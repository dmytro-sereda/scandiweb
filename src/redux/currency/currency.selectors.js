import { createSelector } from "reselect";

const selectCurrency = (state) => state.currency;

export const selectCurrencyHidden = createSelector(
  [selectCurrency],
  (currency) => currency.isHidden
);

export const selectCurrencySymbol = createSelector(
  [selectCurrency],
  (currency) => currency.currentCurrencySymbol
);

export const selectCurrentCurrency = createSelector(
  [selectCurrency],
  (currency) => currency.currentCurrency
);
