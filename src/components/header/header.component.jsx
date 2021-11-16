import React from "react";
import { ReactComponent as Cart } from "../../assets/cart.svg";

import Navigation from "../navigation/navigation.component";
import {
  HeaderContainer,
  Logo,
  CartAndCurrencyContainer,
  CurrencyButton,
  CartButton,
  CurrencyDropdown,
  CurrencyItem,
  Arrow,
} from "./header.styles";

import CartDropdown from "../cart-dropdown/cart-dropdown.component";

class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <Navigation />
        <Logo />
        <CartAndCurrencyContainer>
          <CurrencyButton>
            $ <Arrow />
          </CurrencyButton>
          <CartButton>
            <Cart />
          </CartButton>
          <CurrencyDropdown>
            <CurrencyItem>$ Usd</CurrencyItem>
            <CurrencyItem>$ Eur</CurrencyItem>
            <CurrencyItem>$ Yks</CurrencyItem>
          </CurrencyDropdown>
          <CartDropdown />
        </CartAndCurrencyContainer>
      </HeaderContainer>
    );
  }
}

export default Header;
