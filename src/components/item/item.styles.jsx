import styled from "styled-components";

import { ReactComponent as CartIcon } from "../../assets/cart-white.svg";

export const ItemContainer = styled.div`
  padding: 16px;
  width: 390px;
  transition: all 0.4s;
  position: relative;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
`;

// export const ItemImage = styled.img``;

export const ItemTitle = styled.p`
  font-size: 18px;
  line-height: 1;
  margin: 24px 0 0 0;
`;

export const ItemPrice = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 7px 0 0 0;
`;

export const ItemButton = styled.a`
  width: 52px;
  height: 52px;
  position: absolute;
  background-color: #5ece7b;
  right: 31px;
  top: 320px;
  border-radius: 50%;
  transition: all 0.4s;
  cursor: pointer;
  text-align: center;

  &:hover {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  }
`;

export const Cart = styled(CartIcon)`
  margin-top: 15px;
`;

export const ItemImage = styled.img`
  display: block;
  width: 354px;
  height: 330px;
  object-fit: cover;
`;
