import React from 'react';
import { useTranslation } from 'react-i18next';

import Table from '../../common/table/Table';
import CustomerDetails from './CustomerDetailsComponent';

export interface CustomerData {
  comment?: string;
  contactMethod?: string;
  email?: string;
  firstName?: string;
  id?: string;
  image?: string;
  invoicingType?: string;
  language?: string;
  lastName?: string;
  nickname?: string;
  phone?: string;
}

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

const HarborsListComponent = ({ data }: Props) => {
  const { t } = useTranslation();

  const columns = [
    {
      Header: t('harbors.tableHeaders.queue'),
      accessor: 'queue',
    },
    {
      Header: t('harbors.tableHeaders.name'),
      accessor: 'name',
    },
    {
      Header: t('harbors.tableHeaders.startDate'),
      accessor: 'startDate',
    },
    {
      Header: t('harbors.tableHeaders.group'),
      accessor: 'group',
    },
    {
      Header: t('harbors.tableHeaders.thing'),
      accessor: 'thing',
    },
    {
      Header: t('harbors.tableHeaders.invoice'),
      accessor: 'invoice',
    },
    {
      Header: t('harbors.tableHeaders.goToDetails'),
      accessor: 'goToDetails',
    },
  ];

  const createTableData = ({ data }: any) => {
    const edges = data && data.profiles && data.profiles.edges;
    const customers: Array<CustomerData> = edges.map((edge: any) => edge.node);

    const tableData = customers.map(customer => ({
      goToDetails: 'Avaa',
      group: 'yksityinen',
      invoice: 'laskuja',
      name: `${customer.lastName} ${customer.firstName}`,
      queue: 'foo',
      startDate: '1.1.2019',
      thing: 'Sisältö',
    }));
    return tableData;
  };

  const tableData = createTableData(data);

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
