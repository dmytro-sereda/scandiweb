import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

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
    const { isHidden } = this.props;
    return (
      <CartDropdownContainer isHidden={isHidden}>
        <CartDropdownHeading>
          My Bag, <span>2 items</span>
        </CartDropdownHeading>

        <DropdownItemsContainer>
          {/* <DropdownItem></DropdownItem> */}
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

const mapStateToProps = createStructuredSelector({
  isHidden: selectCartHidden,
});

export default connect(mapStateToProps)(CartDropdown);
