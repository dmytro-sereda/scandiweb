import React from "react";

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
} from "./cart-item.styles";

class CartItem extends React.Component {
  render() {
    return (
      <CartItemContainer>
        <ItemInfoContainer>
          <ItemBrandAndName>
            Apollo <br />
            <span>Running short</span>
          </ItemBrandAndName>
          <ItemPrice>$50</ItemPrice>
          <SizeButtonsContainer>
            <SizeButton>S</SizeButton>
            <SizeButton>M</SizeButton>
          </SizeButtonsContainer>
        </ItemInfoContainer>

        <QuantityButtonsContainer>
          <ChangeQuantityButton>+</ChangeQuantityButton>1
          <ChangeQuantityButton>-</ChangeQuantityButton>
        </QuantityButtonsContainer>

        <ItemPictureContainer>
          <ItemPicture />
        </ItemPictureContainer>
      </CartItemContainer>
    );
  }
}

export default CartItem;
