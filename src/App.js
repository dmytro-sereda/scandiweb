import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
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

const errorLink = onError(({ graphqlErrors }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message }) => {
      alert(`GraphQL error ${message}`);
    });
  }
});

const link = from([errorLink, new HttpLink({ uri: "http://localhost:4000" })]);

const client = new ApolloClient({ cache: new InMemoryCache(), link: link });

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          {/* <Route exact path="/shop/:collectionId" element={<CategoryPage />} /> */}
          <Route exact path="/shop" element={<CategoryPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/item" element={<ItemDescription />} />
        </Routes>
      </div>
    </ApolloProvider>
  );
}

export default App;
