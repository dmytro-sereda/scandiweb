import { gql } from "@apollo/client";

export const LOAD_DATA = gql`
  {
    categories {
      name
      products {
        id
        name
        inStock
        gallery
        description
        brand
        attributes {
          name
          items {
            displayValue
          }
        }
        prices {
          currency
          amount
        }
      }
    }
  }
`;
