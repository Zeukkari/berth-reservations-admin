import React from 'react';
import { useTranslation } from 'react-i18next';
// For some reason eslint import plugin is unable to detect the following type
// eslint-disable-next-line
import { Column } from 'react-table';

import Table from '../../common/table/Table';
import CustomerDetails from './CustomerDetailsComponent';
import { CustomerData } from './utils';

interface TableData {
  goToDetails: string;
  group: string;
  invoice: string;
  name: string;
  queue: string;
  startDate: string;
  thing: string;
}

interface Props {
  data: CustomerData | null | any;
}

type ColumnType = Column<TableData> & { accessor: keyof TableData };

const HarborsListComponent = ({ data }: Props) => {
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

  const tableData: Array<TableData> = data.map(customer => ({
    goToDetails: 'Avaa',
    group: 'yksityinen',
    invoice: 'laskuja',
    name: `${customer.lastName} ${customer.firstName}`,
    queue: '-',
    startDate: '1.1.2019',
    thing: 'Sisältö',
  }));

  return (
    <Table
      data={tableData}
      columns={columns}
      renderSubComponent={row => {
        return <CustomerDetails data={row.values} />;
      }}
      renderMainHeader={() => 'Asiakkaat'}
      canSelectRows
    />
  );
};

export default HarborsListComponent;
