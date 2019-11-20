import gql from 'graphql-tag';

export const CUSTOMER_QUERY = gql`
  query CUSTOMERS {
    harbors {
      edges {
        node {
          id
          properties {
            name
            numberOfPlaces
            piers {
              edges {
                node {
                  properties {
                    electricity
                    wasteCollection
                    gate
                    water
                    lighting
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
