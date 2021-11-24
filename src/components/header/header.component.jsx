import React from "react";
import { ReactComponent as Cart } from "../../assets/cart.svg";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { toggleCart } from "../../redux/cart/cart.actions";
import {
  changeCurrency,
  toggleCurrency,
} from "../../redux/currency/currency.actions";
import {
  selectCurrencyHidden,
  selectCurrencySymbol,
  selectCurrentCurrency,
} from "../../redux/currency/currency.selectors";

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
import { selectCartItems } from "../../redux/cart/cart.selectors";

class Header extends React.Component {
  render() {
    const {
      toggleCart,
      toggleCurrency,
      isHidden,
      changeCurrency,
      currentCurrencySymbol,
      cartItems,
    } = this.props;
    return (
      <HeaderContainer>
        <Navigation />
        <Logo />
        <CartAndCurrencyContainer>
          <CurrencyButton onClick={toggleCurrency}>
            {currentCurrencySymbol} <Arrow ishidden={`${isHidden}`} />
          </CurrencyButton>
          <CartButton onClick={toggleCart} cartItems={cartItems}>
            <Cart />
          </CartButton>
          <CurrencyDropdown ishidden={`${isHidden}`}>
            <CurrencyItem
              onClick={() => changeCurrency({ newCur: "USD", symbol: "$" })}
            >
              $ Usd
            </CurrencyItem>
            <CurrencyItem
              onClick={() => changeCurrency({ newCur: "GBP", symbol: "£" })}
            >
              £ GBP
            </CurrencyItem>
            <CurrencyItem
              onClick={() => changeCurrency({ newCur: "JPY", symbol: "¥" })}
            >
              ¥ JPY
            </CurrencyItem>
            <CurrencyItem
              onClick={() => changeCurrency({ newCur: "AUD", symbol: "A$" })}
            >
              A$ AUD
            </CurrencyItem>
            <CurrencyItem
              onClick={() => changeCurrency({ newCur: "RUB", symbol: "₽" })}
            >
              ₽ RUB
            </CurrencyItem>
          </CurrencyDropdown>
          <CartDropdown />
        </CartAndCurrencyContainer>
      </HeaderContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isHidden: selectCurrencyHidden,
  currentCurrencySymbol: selectCurrencySymbol,
  currentCurrency: selectCurrentCurrency,
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCart()),
  toggleCurrency: () => dispatch(toggleCurrency()),
  changeCurrency: ({ newCur, symbol }) =>
    dispatch(changeCurrency({ newCur, symbol })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
