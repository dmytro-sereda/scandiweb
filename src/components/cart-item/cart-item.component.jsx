import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  addItemToCart,
  decreaseItemCount,
} from "../../redux/cart/cart.actions";
import {
  selectCurrencySymbol,
  selectCurrentCurrency,
} from "../../redux/currency/currency.selectors";

import {
  CartItemContainer,
  ItemInfoContainer,
  ItemBrandAndName,
  ItemPrice,
  SizeButtonsContainer,
  SizeButton,
  QuantityButtonsContainer,
  ChangeQuantityButton,
  ItemPictureContainer,
  ItemPicture,
  RightSideContainer,
} from "./cart-item.styles";

class CartItem extends React.Component {
  render() {
    const {
      currentCurrencySymbol,
      currentCurrency,
      item,
      addItemToCart,
      decreaseItemCount,
    } = this.props;
    return (
      <CartItemContainer>
        <ItemInfoContainer>
          <ItemBrandAndName>
            {item.brand} <br />
            <span>{item.name}</span>
          </ItemBrandAndName>
          <ItemPrice>
            {currentCurrencySymbol}
            {item.prices.find((i) => i.currency === currentCurrency).amount}
          </ItemPrice>
          <SizeButtonsContainer>
            {item.attributes[0].items.map((item, index) => (
              <SizeButton key={index}>{item.displayValue}</SizeButton>
            ))}
          </SizeButtonsContainer>
        </ItemInfoContainer>

        <RightSideContainer>
          <QuantityButtonsContainer>
            <ChangeQuantityButton onClick={() => addItemToCart(item)}>
              +
            </ChangeQuantityButton>
            {item.quantity}
            <ChangeQuantityButton onClick={() => decreaseItemCount(item)}>
              -
            </ChangeQuantityButton>
          </QuantityButtonsContainer>

          <ItemPictureContainer>
            <ItemPicture src={item.gallery[0]} />
          </ItemPictureContainer>
        </RightSideContainer>
      </CartItemContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentCurrency: selectCurrentCurrency,
  currentCurrencySymbol: selectCurrencySymbol,
});

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  decreaseItemCount: (item) => dispatch(decreaseItemCount(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
