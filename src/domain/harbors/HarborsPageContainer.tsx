import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useTranslation } from 'react-i18next';
// For some reason eslint import plugin is unable to detect the following type
// eslint-disable-next-line
import { Column } from 'react-table';

import { HARBORS_QUERY } from './harborsQuery';
import Table from '../../common/table/Table';
import { getHarborsData, HarborData } from './utils';
import { HARBORS } from './__generated__/HARBORS';
import Icon from '../../common/icon/Icon';
import HarborDetails from './harborDetails/HarborDetails';
import Page from '../page/Page';
import HarborsPage from './HarborsPage';

interface Props2 {
  name?: string;
  imageFile?: string;
  streetAddress?: string;
  zipCode?: React.ReactNode;
  municipality?: string;
  wwwUrl?: string;
  servicemapId?: string;
}

interface Props {
  data: Props2;
}

type ColumnType = Column<HarborData> & { accessor: keyof HarborData };

const HarborsContainer: React.FC = () => {
  const { loading, error, data } = useQuery<HARBORS>(HARBORS_QUERY);

  const { t } = useTranslation();
  const columns: ColumnType[] = [
    {
      Header: t('harbors.tableHeaders.harbor'),
      accessor: 'name',
    },
    {
      Header: t('harbors.tableHeaders.places'),
      accessor: 'numberOfPlaces',
    },
    {
      Cell: ({ cell }) => (
        <Icon
          name="plug"
          outlined
          color={!!cell.value ? 'secondary' : 'standard'}
        />
      ),
      Header: () => <Icon name="plug" outlined />,
      accessor: 'electricity',
    },
    {
      Cell: ({ cell }) => (
        <Icon
          name="fence"
          outlined
          color={!!cell.value ? 'secondary' : 'standard'}
        />
      ),
      Header: () => <Icon name="fence" outlined />,
      accessor: 'gate',
    },
    {
      Cell: ({ cell }) => (
        <Icon
          name="streetLight"
          outlined
          color={!!cell.value ? 'secondary' : 'standard'}
        />
      ),
      Header: () => <Icon name="streetLight" outlined />,
      accessor: 'lighting',
    },
    {
      Cell: ({ cell }) => (
        <Icon
          name="waterTap"
          outlined
          color={!!cell.value ? 'secondary' : 'standard'}
        />
      ),
      Header: () => <Icon name="waterTap" outlined />,
      accessor: 'water',
    },
    {
      Cell: ({ cell }) => (
        <Icon
          name="trash"
          outlined
          color={!!cell.value ? 'secondary' : 'standard'}
        />
      ),
      Header: () => <Icon name="trash" outlined />,
      accessor: 'wasteCollection',
    },
  ];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const tableData = getHarborsData(data);
  return (
    <Page>
      <HarborsPage>
        <Table
          data={tableData}
          columns={columns}
          renderSubComponent={row => <HarborDetails {...row.original} />}
          renderMainHeader={() => t('harbors.tableHeaders.mainHeader')}
          canSelectRows
        />
      </HarborsPage>
    </Page>
  );
};

export default HarborsContainer;
