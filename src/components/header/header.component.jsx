import React from "react";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { toggleCart } from "../../redux/cart/cart.actions";
import { toggleCurrency } from "../../redux/currency/currency.actions";
import { selectCurrencyHidden } from "../../redux/currency/currency.selectors";

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
    const { toggleCart, toggleCurrency, isHidden } = this.props;
    return (
      <HeaderContainer>
        <Navigation />
        <Logo />
        <CartAndCurrencyContainer>
          <CurrencyButton onClick={toggleCurrency}>
            $ <Arrow isHidden={isHidden} />
          </CurrencyButton>
          <CartButton onClick={toggleCart}>
            <Cart />
          </CartButton>
          <CurrencyDropdown isHidden={isHidden}>
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

const mapStateToProps = createStructuredSelector({
  isHidden: selectCurrencyHidden,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
  toggleCurrency: () => dispatch(toggleCurrency()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
