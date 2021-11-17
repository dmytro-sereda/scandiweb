import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { addItemToCart } from "../../redux/cart/cart.actions";
import {
  selectCurrentCurrency,
  selectCurrencySymbol,
} from "../../redux/currency/currency.selectors";
import { updateCurrentItem } from "../../redux/shop/shop.actions";

import {
  ItemContainer,
  ItemButton,
  ItemPrice,
  ItemTitle,
  ItemImage,
  Cart,
  ItemImageContainer,
  NotInStock,
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
      updateCurrentItem,
      currentCurrency,
      currentCurrencySymbol,
      addItemToCart,
    } = this.props;

    return (
      <ItemContainer>
        <ItemImageContainer>
          {inStock === true ? "" : <NotInStock>Not in stock</NotInStock>}
          <ItemImage src={images[0]} alt={name} />
        </ItemImageContainer>
        {inStock === true ? (
          <ItemButton onClick={() => addItemToCart(item)}>
            <Cart />
          </ItemButton>
        ) : (
          ""
        )}

        <ItemTitle to="/product" onClick={() => updateCurrentItem(item)}>
          {brand} {name}
        </ItemTitle>
        <ItemPrice>
          {currentCurrencySymbol}
          {prices.find((p) => p.currency === currentCurrency).amount.toFixed(2)}
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
  updateCurrentItem: (item) => dispatch(updateCurrentItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
