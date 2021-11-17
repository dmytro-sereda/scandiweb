import React from "react";

import {
  NavigationContainer,
  NavigationItem,
  NavigationLink,
  NavigationList,
} from "./navifation.styles";

class Navigation extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <NavigationList>
          <NavigationItem>
            <NavigationLink to="/shop">Clothes</NavigationLink>
          </NavigationItem>

          <NavigationItem>
            <NavigationLink to="/shop">Tech</NavigationLink>
          </NavigationItem>
        </NavigationList>
      </NavigationContainer>
    );
  }
}

export default Navigation;
