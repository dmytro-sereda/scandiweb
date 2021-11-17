import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { addItemToCart } from "../../redux/cart/cart.actions";
import {
  selectCurrencySymbol,
  selectCurrentCurrency,
} from "../../redux/currency/currency.selectors";
import { selectCurrentItem } from "../../redux/shop/shop.selectors";

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
} from "./item-description.styles";

class ItemDescriptionPage extends React.Component {
  render() {
    const {
      currentItem,
      currentCurrency,
      currentCurrencySymbol,
      addItemToCart,
    } = this.props;
    return (
      <ItemDescriptionSection>
        <SideImagesContainer>
          {currentItem.gallery.map((item, index) => (
            <SideImageWrapper>
              <SideImage src={item} alt="Product image" key={index} />
            </SideImageWrapper>
          ))}
        </SideImagesContainer>

        <MainImageContainer>
          <MainImage src={currentItem.gallery[0]} alt="Product image" />
        </MainImageContainer>

        <ItemDescriptionContainer>
          <ItemBrand>{currentItem.brand}</ItemBrand>
          <ItemName>{currentItem.name}</ItemName>

          <ParameterName>Size:</ParameterName>
          <SizeButtonsContainer>
            {currentItem.attributes[0].items.map((item, index) => (
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

          <DescriptionButton onClick={() => addItemToCart(currentItem)}>
            Add to cart
          </DescriptionButton>

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
});

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDescriptionPage);
