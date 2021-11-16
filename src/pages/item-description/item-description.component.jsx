import React from "react";

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
    return (
      <ItemDescriptionSection>
        <SideImagesContainer></SideImagesContainer>

        <MainImageContainer>
          <MainImage src="" alt="" />
        </MainImageContainer>

        <ItemDescriptionContainer>
          <ItemBrand></ItemBrand>
          <ItemName></ItemName>

          <ParameterName>Size:</ParameterName>
          <SizeButtonsContainer></SizeButtonsContainer>

          <ParameterName>Price:</ParameterName>
          <ItemPrice></ItemPrice>

          <DescriptionButton>Add to cart</DescriptionButton>

          <ItemText></ItemText>
        </ItemDescriptionContainer>
      </ItemDescriptionSection>
    );
  }
}

export default ItemDescriptionPage;
