import React from 'react';

import HarborsList from './HarborsListComponent';
import { getHarborsData, HarborData } from './utils';
import { harborQueryResponse } from './__mocks__/data';
import { HARBORS } from './__generated__/HARBORS';

export default {
  component: HarborsList,
  title: 'HarborsList',
};

const tableData: HarborData[] = getHarborsData(
  harborQueryResponse.data as HARBORS
);

export const harborsList = () => <HarborsList data={tableData} />;
