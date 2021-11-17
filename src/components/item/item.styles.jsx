import styled from "styled-components";

import { Link } from "react-router-dom";

import { ReactComponent as CartIcon } from "../../assets/cart-white.svg";

export const ItemContainer = styled.div`
  padding: 16px;
  width: 390px;
  transition: all 0.4s;
  position: relative;

  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
`;

// export const ItemImage = styled.img``;

export const ItemTitle = styled(Link)`
  font-size: 18px;
  line-height: 1;
  margin: 24px 0 0 0;
  cursor: pointer;
  text-decoration: none;
  color: #1d1f22;
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
  opacity: 0;

  &:hover {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  }

  ${ItemContainer}:hover & {
    opacity: 1;
  }
`;

export const Cart = styled(CartIcon)`
  margin-top: 15px;
`;

export const ItemImageContainer = styled.div`
  position: relative;
`;

export const NotInStock = styled.p`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.5);
  font-size: 24px;
  font-weight: 400;
  color: #333;
  text-transform: uppercase;
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 150px;
`;

export const ItemImage = styled.img`
  display: block;
  width: 354px;
  height: 330px;
  object-fit: cover;
  margin-bottom: 24px;
`;
