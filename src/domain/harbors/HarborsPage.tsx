import React from 'react';
import { useApolloClient } from '@apollo/react-hooks';

import styles from './harborsPage.module.scss';

const HarborsPage: React.SFC = ({ children }) => {
  const client = useApolloClient();
  client.writeData({ data: { name: 'Harbor Page ' } });

  return <div className={styles.harborsPage}>{children}</div>;
};

export default HarborsPage;
