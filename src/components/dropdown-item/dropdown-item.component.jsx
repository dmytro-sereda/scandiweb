import React from "react";

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
} from "./dropdown-item.styles";

class DropdownItem extends React.Component {
  render() {
    return (
      <DropdownItemContainer>
        <ItemInfoContainer>
          <ItemBrandAndName>
            Apollo <br />
            Running Short
          </ItemBrandAndName>
          <ItemPrice>$50</ItemPrice>
          <SizeButtonsContainer>
            <SizeButton>S</SizeButton>
          </SizeButtonsContainer>
        </ItemInfoContainer>

        <QuantityButtonsContainer>
          <ChangeQuantityButton>+</ChangeQuantityButton>1
          <ChangeQuantityButton>-</ChangeQuantityButton>
        </QuantityButtonsContainer>

        <ItemPictureContainer>
          <ItemPicture></ItemPicture>
        </ItemPictureContainer>
      </DropdownItemContainer>
    );
  }
}

export default DropdownItem;
