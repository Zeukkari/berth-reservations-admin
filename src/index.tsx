import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/browser';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';

import App from './domain/app/App';
import { createClient } from './apollo/index';
import { getPageNameQuery, getPageNameOptions } from './apollo/getPageName';
import './locales/i18n';
import './assets/styles/main.scss';

const { REACT_APP_SENTRY_DSN, REACT_APP_SENTRY_ENVIRONMENT } = process.env;

Sentry.init({
  dsn: REACT_APP_SENTRY_DSN,
  environment: REACT_APP_SENTRY_ENVIRONMENT,
});

const client = createClient();

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
