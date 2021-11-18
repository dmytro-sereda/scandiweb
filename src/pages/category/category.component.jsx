import React, { useEffect } from "react";
import { LOAD_DATA } from "../../GraphQL/queries";
import { useQuery } from "@apollo/client";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import { selectCollections } from "../../redux/shop/shop.selectors";
import { useParams } from "react-router-dom";
import { SectionHeading } from "./category.styles";
import ItemsCollection from "../../components/items-collection/items-collection.component";

const CategoryPage = ({ updateCollections, collections }) => {
  const { data } = useQuery(LOAD_DATA);

  useEffect(() => {
    if (data) {
      updateCollections(data.categories);
    }
  }, [data, updateCollections]);

  let { collectionId } = useParams();
  const collectionToUse = collections.find((c) => c.name === collectionId);
  return (
    <section>
      <SectionHeading>{collectionToUse.name}</SectionHeading>
      <ItemsCollection collection={collectionToUse.products} />
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
