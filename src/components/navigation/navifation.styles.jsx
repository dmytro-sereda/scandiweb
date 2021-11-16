import styled from "styled-components";

export const NavigationContainer = styled.div``;

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavigationItem = styled.li`
  list-style: none;

  /* &:not(:last-of-type) {
    margin-right: 32px;
  } */
`;

export const NavigationLink = styled.a`
  text-decoration: none;
  color: #1d1f22;
  font-size: 16px;
  /* transition: all 0.4s; */
  text-transform: uppercase;
  padding: 20px 16px;
  position: relative;
  cursor: pointer;
  font-weight: 300;

  &:hover {
    color: #5ece7b;
    font-weight: 600;

    &::after {
      display: block;
    }
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    display: none;
    background-color: #5ece7b;
  }
`;
