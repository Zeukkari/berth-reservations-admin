import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { HARBORS } from './__generated__/HARBORS';
import { HARBORS_QUERY } from './queries';
import HarborsList from './HarborsListComponent';
import { getHarborsData } from './utils';

const HarborsContainer: React.FC = () => {
  const { loading, error, data } = useQuery<HARBORS>(HARBORS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const tableData = getHarborsData(data);

  return <HarborsList data={tableData} />;
};

export default HarborsContainer;
