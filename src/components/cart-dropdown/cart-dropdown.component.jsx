import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {
  selectCartHidden,
  selectCartItems,
} from "../../redux/cart/cart.selectors";
import {
  selectCurrencySymbol,
  selectCurrentCurrency,
} from "../../redux/currency/currency.selectors";
// import { withRouter } from "react-router";

import {
  CartDropdownContainer,
  CartDropdownHeading,
  CartDropdownViewButton,
  CheckoutButton,
  DropdownButtonsContainer,
  TotalContainer,
  TotalAmount,
  DropdownItemsContainer,
} from "./cart-dropdown.styles";

import DropdownItem from "../dropdown-item/dropdown-item.component";

class CartDropdown extends React.Component {
  render() {
    const { isHidden, cartItems, currentCurrencySymbol, currentCurrency } =
      this.props;
    return (
      <CartDropdownContainer isHidden={isHidden}>
        <CartDropdownHeading>
          My Bag,{" "}
          <span>
            {cartItems.reduce((acc, i) => (acc += i.quantity), 0)} items
          </span>
        </CartDropdownHeading>

        <DropdownItemsContainer>
          {cartItems.map((item, index) => (
            <DropdownItem item={item} key={index} />
          ))}
        </DropdownItemsContainer>

        <TotalContainer>
          Total:{" "}
          <TotalAmount>
            {currentCurrencySymbol}
            {cartItems
              .reduce(
                (acc, i) =>
                  (acc += i.prices.find(
                    (i) => i.currency === currentCurrency
                  ).amount) * i.quantity,
                0
              )
              .toFixed(2)}
          </TotalAmount>
        </TotalContainer>

        <DropdownButtonsContainer>
          <CartDropdownViewButton>View Bag</CartDropdownViewButton>
          <CheckoutButton onClick={() => console.log(2)}>
            Check Out
          </CheckoutButton>
        </DropdownButtonsContainer>
      </CartDropdownContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isHidden: selectCartHidden,
  cartItems: selectCartItems,
  currentCurrencySymbol: selectCurrencySymbol,
  currentCurrency: selectCurrentCurrency,
});

export default connect(mapStateToProps)(CartDropdown);
