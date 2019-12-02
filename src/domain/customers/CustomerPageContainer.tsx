import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useTranslation } from 'react-i18next';
// For some reason eslint import plugin is unable to detect the following type
// eslint-disable-next-line
import { Column } from 'react-table';

import { CUSTOMER_QUERY } from './queries';
import { getCustomersData } from './utils';
import { CUSTOMERS } from './__generated__/CUSTOMERS';
import CustomerList from './CustomerListComponent';

const CustomersPageContainer: React.FC = () => {
  const { loading, error, data } = useQuery<CUSTOMERS>(CUSTOMER_QUERY);

  const { t } = useTranslation();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const tableData = getCustomersData(data);

  return <CustomerList data={tableData} />;
};

export default CustomersPageContainer;
