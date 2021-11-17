import styled from "styled-components";

export const ItemDescriptionSection = styled.section`
  display: flex;
  padding-top: 80px;
`;

export const SideImagesContainer = styled.div`
  max-height: 510px;
  overflow: scroll;
`;

export const SideImageWrapper = styled.div`
  width: 80px;
  /* height: 80px; */

  &:not(:last-of-type) {
    margin-bottom: 30px;
  }
`;

export const SideImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
  object-fit: cover;
`;

export const MainImageContainer = styled.div`
  width: 610px;
  height: 510px;
  margin: 0 100px 0 30px;
`;

export const MainImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ItemDescriptionContainer = styled.div`
  width: 292px;
`;

export const ItemBrand = styled.h3`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const ItemName = styled.p`
  font-size: 30px;
`;

export const ParameterName = styled.p`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 43px;
`;

export const SizeButtonsContainer = styled.div`
  display: flex;
  margin-top: 10px;
  flex-wrap: wrap;
  gap: 12px 0;
`;

export const SizeButton = styled.p`
  border: 1px solid #1d1f22;
  color: #1d1f22;
  /* width: 63px; */
  padding: 13px 13px;
  text-align: center;
  transition: all 0.4s;
  cursor: pointer;
  display: inline-block;

  &:not(:last-of-type) {
    margin-right: 12px;
  }

  &:hover {
    background-color: #1d1f22;
    color: white;
  }
`;

export const ItemPrice = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

export const DescriptionButton = styled.a`
  text-decoration: none;
  color: white;
  background-color: #5ece7b;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  padding: 16px 93px;
  display: block;
  margin: 36px 0 56px 0;
  cursor: pointer;
`;

export const ItemText = styled.div`
  font-weight: 400;
  font-size: 16px;
`;
