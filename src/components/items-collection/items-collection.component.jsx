import React from "react";

import { ItemsContainer } from "./items-collection.styles";
import Item from "../item/item.component";

class ItemsCollection extends React.Component {
  render() {
    const { collection } = this.props;
    return (
      <ItemsContainer>
        {collection.map((c, index) => (
          <Item
            brand={c.brand}
            name={c.name}
            prices={c.prices}
            images={c.gallery}
            item={c}
            inStock={c.inStock}
            key={index}
          />
        ))}
      </ItemsContainer>
    );
  }
}

export default ItemsCollection;
