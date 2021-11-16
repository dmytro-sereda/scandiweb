import styled from "styled-components";

export const CartDropdownContainer = styled.div`
  width: 327px;
  background-color: white;
  height: 500px;
  position: absolute;
  top: 100%;
  right: 0;
  border: 1px solid black;
  padding: 8px 16px 20px 16px;
`;

export const CartDropdownHeading = styled.p`
  font-size: 16px;
  font-weight: 700;

  span {
    font-weight: 300;
  }
`;

export const DropdownItemsContainer = styled.div`
  margin: 20px 0 40px 0;
  max-height: 315px;
  overflow: scroll;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 35px;
`;

export const TotalAmount = styled.p`
  font-weight: 700;
  font-size: 16px;
`;

export const DropdownButtonsContainer = styled.div`
  display: flex;
`;

export const CartDropdownViewButton = styled.a`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
  padding: 13px 36px;
  color: #1d1f22;
  border: 1px solid #1d1f22;
`;

export const CheckoutButton = styled.a`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  display: inline-block;
  padding: 14px 29.5px;
  color: white;
  background-color: #5ece7b;
  margin-left: 12px;
`;
