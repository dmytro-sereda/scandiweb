import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { addItemToCart } from "../../redux/cart/cart.actions";
import {
  selectCurrentCurrency,
  selectCurrencySymbol,
} from "../../redux/currency/currency.selectors";

import {
  ItemContainer,
  ItemButton,
  ItemPrice,
  ItemTitle,
  ItemImage,
  Cart,
} from "./item.styles";

class Item extends React.Component {
  render() {
    const {
      brand,
      name,
      prices,
      item,
      images,
      inStock,
      currentCurrency,
      currentCurrencySymbol,
      addItemToCart,
    } = this.props;

    return (
      <ItemContainer>
        <ItemImage src={images[0]} alt={name} />
        {inStock === true ? (
          <ItemButton onClick={() => addItemToCart(item)}>
            <Cart />
          </ItemButton>
        ) : (
          ""
        )}

        <ItemTitle>
          {brand} {name}
        </ItemTitle>
        <ItemPrice>
          {currentCurrencySymbol}
          {prices.find((p) => p.currency === currentCurrency).amount}
        </ItemPrice>
      </ItemContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentCurrency: selectCurrentCurrency,
  currentCurrencySymbol: selectCurrencySymbol,
});

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
