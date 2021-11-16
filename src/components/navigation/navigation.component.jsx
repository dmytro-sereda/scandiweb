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
            <NavigationLink>Women</NavigationLink>
          </NavigationItem>

          <NavigationItem>
            <NavigationLink>Men</NavigationLink>
          </NavigationItem>

          <NavigationItem>
            <NavigationLink>Kids</NavigationLink>
          </NavigationItem>
        </NavigationList>
      </NavigationContainer>
    );
  }
}

export default Navigation;
