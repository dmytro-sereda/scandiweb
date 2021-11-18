import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { addItemToCart } from "../../redux/cart/cart.actions";
import {
  selectCurrencySymbol,
  selectCurrentCurrency,
} from "../../redux/currency/currency.selectors";
import { updateMainPicture } from "../../redux/shop/shop.actions";
import {
  selectCurrentItem,
  selectMainPicture,
} from "../../redux/shop/shop.selectors";

import {
  ItemDescriptionSection,
  SideImagesContainer,
  SideImageWrapper,
  SideImage,
  MainImageContainer,
  MainImage,
  ItemDescriptionContainer,
  ItemBrand,
  ItemName,
  SizeButtonsContainer,
  ParameterName,
  SizeButton,
  ItemPrice,
  DescriptionButton,
  ItemText,
  UnavailableItem,
} from "./item-description.styles";

class ItemDescriptionPage extends React.Component {
  render() {
    const {
      currentItem,
      currentCurrency,
      currentCurrencySymbol,
      addItemToCart,
      updateMainPicture,
      currentItemMainPicture,
    } = this.props;
    return (
      <ItemDescriptionSection>
        <SideImagesContainer>
          {currentItem.gallery.map((item, index) => (
            <SideImageWrapper key={index}>
              <SideImage
                src={item}
                alt="Product image"
                key={index}
                onClick={() => updateMainPicture(item)}
              />
            </SideImageWrapper>
          ))}
        </SideImagesContainer>

        <MainImageContainer>
          <MainImage src={currentItemMainPicture} alt="Product image" />
        </MainImageContainer>

        <ItemDescriptionContainer>
          <ItemBrand>{currentItem.brand}</ItemBrand>
          <ItemName>{currentItem.name}</ItemName>

          <ParameterName>{currentItem.attributes[0]?.name}:</ParameterName>
          <SizeButtonsContainer>
            {currentItem.attributes[0]?.items.map((item, index) => (
              <SizeButton key={index}>{item.displayValue}</SizeButton>
            ))}
          </SizeButtonsContainer>

          <ParameterName>Price:</ParameterName>
          <ItemPrice>
            {currentCurrencySymbol}
            {currentItem.prices
              .find((i) => i.currency === currentCurrency)
              .amount.toFixed(2)}
          </ItemPrice>

          {currentItem.inStock === true ? (
            <DescriptionButton onClick={() => addItemToCart(currentItem)}>
              Add to cart
            </DescriptionButton>
          ) : (
            <UnavailableItem>Sorry, this item is unavailable</UnavailableItem>
          )}

          <ItemText>{currentItem.description.slice(3, -4)}</ItemText>
        </ItemDescriptionContainer>
      </ItemDescriptionSection>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentCurrency: selectCurrentCurrency,
  currentCurrencySymbol: selectCurrencySymbol,
  currentItem: selectCurrentItem,
  currentItemMainPicture: selectMainPicture,
});

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  updateMainPicture: (url) => dispatch(updateMainPicture(url)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDescriptionPage);
