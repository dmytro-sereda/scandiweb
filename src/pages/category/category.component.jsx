import React from "react";

import { SectionHeading } from "./category.styles";
import ItemsCollection from "../../components/items-collection/items-collection.component";

class CategoryPage extends React.Component {
  render() {
    return (
      <section>
        <SectionHeading>Women</SectionHeading>
        <ItemsCollection />
      </section>
    );
  }
}
