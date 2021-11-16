import React from "react";

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
    return (
      <CartDropdownContainer>
        <CartDropdownHeading>
          My Bag, <span>2 items</span>
        </CartDropdownHeading>

        <DropdownItemsContainer>
          <DropdownItem></DropdownItem>
        </DropdownItemsContainer>

        <TotalContainer>
          Total: <TotalAmount>$100</TotalAmount>
        </TotalContainer>

        <DropdownButtonsContainer>
          <CartDropdownViewButton>View Bag</CartDropdownViewButton>
          <CheckoutButton>Check Out</CheckoutButton>
        </DropdownButtonsContainer>
      </CartDropdownContainer>
    );
  }
}

export default CartDropdown;
