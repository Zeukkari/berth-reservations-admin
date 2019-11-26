import gql from 'graphql-tag';

import updatePageName from './updatePageName';

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
  }
`;

export const resolvers = {
  Mutation: {
    updatePageName,
  },
};
