import React, { useEffect } from "react";
import { LOAD_DATA } from "../../GraphQL/queries";
import { useQuery } from "@apollo/client";
import { SectionHeading } from "./category.styles";
import ItemsCollection from "../../components/items-collection/items-collection.component";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selectors";

const CategoryPage = ({ updateCollections, collections }) => {
  const { data } = useQuery(LOAD_DATA);

  useEffect(() => {
    if (data) {
      updateCollections(data.categories);
    }
  }, [data, updateCollections]);

  console.log(collections[0]);
  return (
    <section>
      <SectionHeading>{collections[0].name}</SectionHeading>
      <ItemsCollection collection={collections[0].products} />
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collections) => dispatch(updateCollections(collections)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
