import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {
  selectCurrencySymbol,
  selectCurrentCurrency,
} from "../../redux/currency/currency.selectors";

import {
  DropdownItemContainer,
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
} from "./dropdown-item.styles";
import { addItemToCart } from "../../redux/cart/cart.actions";
import { decreaseItemCount } from "../../redux/cart/cart.actions";

class DropdownItem extends React.Component {
  render() {
    const {
      item,
      currentCurrency,
      currentCurrencySymbol,
      addItemToCart,
      decreaseItemCount,
    } = this.props;
    return (
      <DropdownItemContainer>
        <ItemInfoContainer>
          <ItemBrandAndName>
            {item.brand} <br />
            {item.name}
          </ItemBrandAndName>

          <ItemPrice>
            {currentCurrencySymbol}
            {item.prices.find((i) => i.currency === currentCurrency).amount}
          </ItemPrice>

          <SizeButtonsContainer>
            <SizeButton>S</SizeButton>
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
            <ItemPicture src={item.gallery[0]}></ItemPicture>
          </ItemPictureContainer>
        </RightSideContainer>
      </DropdownItemContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(DropdownItem);
