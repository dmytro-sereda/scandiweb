import React, { useEffect } from "react";
import { LOAD_DATA } from "../../GraphQL/queries";
import { useQuery } from "@apollo/client";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import { selectCollections } from "../../redux/shop/shop.selectors";
// import { withRouter } from "react-router";
import { useRouteMatch } from "react-router-dom";

import { SectionHeading } from "./category.styles";
import ItemsCollection from "../../components/items-collection/items-collection.component";

const CategoryPage = ({ updateCollections, collections }) => {
  const { data } = useQuery(LOAD_DATA);

  useEffect(() => {
    if (data) {
      updateCollections(data.categories);
    }
  }, [data, updateCollections]);

  console.log(window);

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
