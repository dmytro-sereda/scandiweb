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
  SlideButton,
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
          {/* I have searched many solutions for the slider, however, all of them
          require the use of hooks, which obviously do not work with Class components. 
          I would be happy to hear from you how would you implement such slider with class component and not functional */}
          <ItemPictureContainer>
            <ItemPicture src={item.gallery[0]} />

            <SlideButton />
            <SlideButton rotate={true} />
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
