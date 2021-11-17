import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {
  selectCurrencySymbol,
  selectCurrentCurrency,
} from "../../redux/currency/currency.selectors";
import { addItemToCart } from "../../redux/cart/cart.actions";
import { decreaseItemCount } from "../../redux/cart/cart.actions";
import { updateCurrentItem } from "../../redux/shop/shop.actions";

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

class DropdownItem extends React.Component {
  render() {
    const {
      item,
      currentCurrency,
      currentCurrencySymbol,
      addItemToCart,
      decreaseItemCount,
      updateCurrentItem,
    } = this.props;
    return (
      <DropdownItemContainer>
        <ItemInfoContainer>
          <ItemBrandAndName
            to="/product"
            onClick={() => updateCurrentItem(item)}
          >
            {item.brand} <br />
            {item.name}
          </ItemBrandAndName>

          <ItemPrice>
            {currentCurrencySymbol}
            {item.prices
              .find((i) => i.currency === currentCurrency)
              .amount.toFixed(2)}
          </ItemPrice>

          <SizeButtonsContainer>
            {item.attributes[0].items
              .filter((_, index) => index < 2)
              .map((item, index) => (
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
  updateCurrentItem: (item) => dispatch(updateCurrentItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DropdownItem);
