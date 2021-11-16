import React from "react";

import { ItemContainer, ItemButton, ItemPrice, ItemTitle } from "./item.styles";

class Item extends React.Component {
  render() {
    return (
      <ItemContainer>
        <img src="" alt="" />
        <ItemButton />
        <ItemTitle></ItemTitle>
        <ItemPrice></ItemPrice>
      </ItemContainer>
    );
  }
}

export default Item;
