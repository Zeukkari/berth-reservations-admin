import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Section, Notification } from 'hds-react';

import HarborsPage from '../harbors/HarborsPageContainer';
import List from '../../common/list/List';
import LabelValuePair from '../../common/labelValuePair/LabelValuePair';
import ListItem from '../../common/list/ListItem';
import LogoutButton from '../login/LogoutButton';
import Login from '../login/Login';

export const GET_LOCAL_STATE = gql`
  query GetLocalState {
    cartItems @client
    isLoggedIn @client
  }
`;

const IndividualHarborPage: React.SFC = ({ children }) => {
  const { loading, error, data } = useQuery<any>(GET_LOCAL_STATE);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const { isLoggedIn, cartItems } = data;

  return (
    <>
      <Section color="secondary">
        <Notification labelText="debug page">
          <LabelValuePair
            label="isLoggedIn"
            value={isLoggedIn ? 'true' : 'false'}
          />
          {isLoggedIn && <LogoutButton />}

          {!isLoggedIn && <Login />}
        </Notification>
      </Section>

      <Section color="secondary">
        <Notification labelText="selected harbor id's:"></Notification>
      </Section>

      <List>
        {cartItems &&
          cartItems.length > 0 &&
          cartItems.map((item: any) => <ListItem key={item}>{item}</ListItem>)}
      </List>
      <HarborsPage />
    </>
  );
};

export default IndividualHarborPage;
