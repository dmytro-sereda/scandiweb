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
            <NavigationLink>Clothes</NavigationLink>
          </NavigationItem>

          <NavigationItem>
            <NavigationLink>Tech</NavigationLink>
          </NavigationItem>
        </NavigationList>
      </NavigationContainer>
    );
  }
}

export default Navigation;
