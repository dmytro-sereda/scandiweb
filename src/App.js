import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/header/header.component";

import CartPage from "./pages/cart/cart.component";
import CategoryPage from "./pages/category/category.component";
import ItemDescription from "./pages/item-description/item-description.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<CategoryPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/item" element={<ItemDescription />} />
      </Routes>
    </div>
  );
}

export default App;
