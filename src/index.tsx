import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import { ApolloProvider, useQuery, useApolloClient } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from './domain/app/App';
import { resolvers, typeDefs } from './resolvers';
import './locales/i18n';
import './assets/styles/main.scss';


const {
  REACT_APP_API_URI,
  REACT_APP_SENTRY_DSN,
  REACT_APP_SENTRY_ENVIRONMENT,
} = process.env;

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

const cache = new InMemoryCache();

cache.writeData({
  data: { isLoggedIn: !!localStorage.getItem('token') },
});

function IsLoggedIn() {
  const { data } = useQuery(IS_LOGGED_IN);
  return <div>{` is logged in: ${data.isLoggedIn}`}</div>;
}

export default function LogoutButton() {
  const client = useApolloClient();
  const { data } = useQuery(IS_LOGGED_IN);
  return (
    <button
      onClick={() => {
        client.writeData({ data: { isLoggedIn: !data.isLoggedIn } });
        localStorage.clear();
      }}
    >
      Logout
    </button>
  );
}

const client = new ApolloClient({
  cache: cache,
  resolvers,
  typeDefs,
  uri: REACT_APP_API_URI,
});

Sentry.init({
  dsn: REACT_APP_SENTRY_DSN,
  environment: REACT_APP_SENTRY_ENVIRONMENT,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <IsLoggedIn />
    <LogoutButton />
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

