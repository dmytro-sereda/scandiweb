import styled from "styled-components";

import { ReactComponent as Icon } from "../../assets/logo.svg";
import { ReactComponent as ArrowIcon } from "../../assets/arrow.svg";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
`;

export const Logo = styled(Icon)``;

export const CartAndCurrencyContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
`;

export const CurrencyButton = styled.div`
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Arrow = styled(ArrowIcon)`
  margin-left: 10px;
  transition: all 0.4s;
  ${(props) => (props.isHidden === true ? "" : "transform: rotate(180deg)")};
`;

export const CartButton = styled.div`
  position: relative;
  cursor: pointer;
  margin-left: 22px;

  &::before {
    position: absolute;
    content: "2";
    color: white;
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    right: -10px;
    top: -9px;
    background-color: #1d1f22;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`;

export const CurrencyDropdown = styled.div`
  position: absolute;
  width: 114px;
  top: 100%;
  right: 0;
  box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  padding: 20px 0 20px 20px;
  ${(props) => (props.isHidden === true ? "display: none" : "")}
`;

export const CurrencyItem = styled.div`
  cursor: pointer;
  text-transform: uppercase;

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;
