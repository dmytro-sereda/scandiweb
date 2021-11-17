import React from "react";

import {
  NavigationContainer,
  NavigationItem,
  NavigationLink,
  NavigationList,
} from "./navigation.styles";

class Navigation extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <NavigationList>
          <NavigationItem>
            <NavigationLink to="/shop/clothes">Clothes</NavigationLink>
          </NavigationItem>

          <NavigationItem>
            <NavigationLink to="/shop/tech">Tech</NavigationLink>
          </NavigationItem>
        </NavigationList>
      </NavigationContainer>
    );
  }
}

export default Navigation;
