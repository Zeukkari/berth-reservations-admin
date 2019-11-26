import gql from 'graphql-tag';

export const HARBOR_LIST = gql`
  fragment HarborList on HARBORS {
    edges {
      node {
        id
        properties {
          name
          streetAddress
          zipCode
          municipality
          wwwUrl
          imageFile
          servicemapId
        }
      }
    }
  }
`;
