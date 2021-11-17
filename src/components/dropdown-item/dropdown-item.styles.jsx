import styled from "styled-components";

import { Link } from "react-router-dom";

export const DropdownItemContainer = styled.div`
  display: flex;
  justify-content: space-between;

  &:not(:last-of-type) {
    margin-bottom: 40px;
  }
`;

export const ItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ItemBrandAndName = styled(Link)`
  font-weight: 300;
  font-size: 16px;
  max-width: 132px;
  cursor: pointer;
  text-decoration: none;
  color: #1d1f22;
`;

export const ItemPrice = styled.p`
  font-weight: 500;
  font-size: 16px;
  margin-top: -10px;
`;

export const SizeButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* margin-top: 27px; */
`;

export const SizeButton = styled.a`
  display: inline-block;
  border: 1px solid #1d1f22;
  text-align: center;
  /* width: 24px; */
  padding: 2px 5px;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 5px;
  }
`;

export const QuantityButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 500;
  font-size: 16px;
  align-items: center;
  margin-right: 10px;
  height: 100%;
`;

export const ChangeQuantityButton = styled.a`
  display: inline-block;
  text-align: center;
  border: 1px solid #1d1f22;
  width: 24px;
  font-size: 19px;
  cursor: pointer;
`;

export const ItemPictureContainer = styled.div`
  width: 105px;
  height: 137px;
`;

export const ItemPicture = styled.img`
  display: block;
  width: 100%;
`;

export const RightSideContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
