import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header.component";
import CartPage from "./pages/cart/cart.component";
import CategoryPage from "./pages/category/category.component";
import ItemDescription from "./pages/item-description/item-description.component";
import MainPage from "./pages/main/main.component";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createStructuredSelector } from "reselect";
import { selectCurrencyHidden } from "./redux/currency/currency.selectors";
import { connect } from "react-redux";
import { selectCartHidden } from "./redux/cart/cart.selectors";
import { toggleCart } from "./redux/cart/cart.actions";
import { toggleCurrency } from "./redux/currency/currency.actions";

const errorLink = onError(({ graphqlErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message }) => {
      alert(`GraphQL error ${message}`);
      return message;
    });
  }
});

const link = from([errorLink, new HttpLink({ uri: "http://localhost:4000" })]);

const client = new ApolloClient({ cache: new InMemoryCache(), link: link });

function App({ isCurrencyHidden, isCartHidden, toggleCart, toggleCurrency }) {
  return (
    <ApolloProvider client={client}>
      <div
        className="App"
        onClick={() => {
          if (!isCurrencyHidden) {
            toggleCurrency();
          }
          if (!isCartHidden) {
            toggleCart();
          }
        }}
      >
        <Header />
        <Routes>
          {/* <Switch> */}
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/shop/:collectionId" element={<CategoryPage />} />
          {/* <Route exact path="/shop" element={<CategoryPage />} /> */}
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product" element={<ItemDescription />} />
        </Routes>
        {/* </Switch> */}
      </div>
    </ApolloProvider>
  );
}

const mapStateToProps = createStructuredSelector({
  isCurrencyHidden: selectCurrencyHidden,
  isCartHidden: selectCartHidden,
});

const mapDispatchToProps = (dispacth) => ({
  toggleCart: () => dispacth(toggleCart()),
  toggleCurrency: () => dispacth(toggleCurrency()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
