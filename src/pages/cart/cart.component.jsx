import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartItem from "../../components/cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import { CartContainer } from "./cart.styles";

class CartPage extends React.Component {
  render() {
    const { cartItems } = this.props;
    return (
      <CartContainer>
        {cartItems.map((item, index) => (
          <CartItem item={item} key={index} />
        ))}
      </CartContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartPage);
