import React from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const toggleAppTheme = gql`
  mutation updateAppState {
    isDarkModeEnabled
  }
`;

const getAppState = gql`
  query {
    state @client {
      appState {
        isDarkModeEnabled
      }
    }
  }
`;

const ToggleTheme = () => {
  const { loading, error, data } = useQuery(getAppState);
  const [toggleTheme] = useMutation(toggleAppTheme);

  console.log("loading, error, data: ", loading, error, data)



  if (loading) {
    return <p> Loading... </p>;
  }

  if (error) {
    return <p> Error... </p>;
  }

  if (data === undefined) {
    return <p> No data... </p>;
  }

  const handleToggle = () => {
    const { isDarkModeEnabled } = data.state.appState;
    const newAppState = {
      isDarkModeEnabled: !isDarkModeEnabled,
      __typename: 'AppState',
    };
    toggleTheme({ variables: newAppState });
  };

  return <button onClick={handleToggle}>Toggle Theme</button>;
};

export default ToggleTheme;
