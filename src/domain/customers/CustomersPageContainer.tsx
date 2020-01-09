import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Column } from 'react-table';
import { useTranslation } from 'react-i18next';

import { CUSTOMER_QUERY } from './queries';
import { getCustomersData, CustomerData } from './utils';
import { CUSTOMERS } from './__generated__/CUSTOMERS';
import CustomersPage from './CustomersPage';
import Table from '../../common/table/Table';

type ColumnType = Column<CustomerData> & { accessor: keyof TableData };

export interface TableData {
  goToDetails?: string;
  group?: string;
  invoice?: string;
  name?: string;
  queue?: string;
  startDate?: string;
  thing?: string;
}

type ColumnType = Column<Array<TableData>>;

const CustomersListComponent = ({ data }: ColumnType) => {
  const { t } = useTranslation();
  const columns: ColumnType[] = [
    {
      Header: t('customers.tableHeaders.queue'),
      accessor: 'queue',
    },
    {
      Header: t('customers.tableHeaders.name'),
      accessor: 'name',
    },
    {
      Header: t('customers.tableHeaders.startDate'),
      accessor: 'startDate',
    },
    {
      Header: t('customers.tableHeaders.group'),
      accessor: 'group',
    },
    {
      Header: t('customers.tableHeaders.thing'),
      accessor: 'thing',
    },
    {
      Header: t('customers.tableHeaders.invoice'),
      accessor: 'invoice',
    },
    {
      Header: t('customers.tableHeaders.goToDetails'),
      accessor: 'goToDetails',
    },
  ];

  return (
    <Table
      data={data}
      columns={columns}
      renderSubComponent={_ => {
        return <div>placeholder</div>;
      }}
      renderMainHeader={() => 'Asiakkaat'}
      canSelectRows
    />
  );
};

export default CustomersListComponent;
