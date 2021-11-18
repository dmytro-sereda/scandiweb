import styled from "styled-components";

import { ReactComponent as Icon } from "../../assets/chevron-right.svg";

export const CartItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-top: 1px solid #e5e5e5;
  padding-top: 20px;

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;

export const ItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ItemBrandAndName = styled.p`
  font-weight: 600;
  font-size: 30px;

  span {
    font-weight: 300;
  }
`;

export const ItemPrice = styled.p`
  font-weight: 500;
  font-size: 24px;
  margin-top: -10px;
  margin: 12px 0;
`;

export const SizeButtonsContainer = styled.div`
  display: flex;
  /* margin-top: 27px; */
`;

export const SizeButton = styled.a`
  display: inline-block;
  border: 1px solid #1d1f22;
  text-align: center;
  padding: 13px 26px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.4s;

  &:not(:last-of-type) {
    margin-right: 12px;
  }

  &:hover {
    background-color: #1d1f22;
    color: white;
  }
`;

export const QuantityButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 500;
  font-size: 24px;
  align-items: center;
  margin-right: 10px;
  height: 100%;
`;

export const ChangeQuantityButton = styled.a`
  display: inline-block;
  text-align: center;
  border: 1px solid #1d1f22;
  width: 45px;
  padding: 6px 0;
  font-size: 25px;
  cursor: pointer;
`;

export const ItemPictureContainer = styled.div`
  width: 141px;
  height: 181px;
  position: relative;
`;

export const ItemPicture = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* display: none; */
`;

export const RightSideContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SlideButton = styled(Icon)`
  cursor: pointer;
  position: absolute;
  top: 50%;
  ${(props) =>
    props.rotate === true
      ? "transform: translateY(-50%) rotate(180deg); right: 0;"
      : "left: 0; transform: translateY(-50%)"};
`;
