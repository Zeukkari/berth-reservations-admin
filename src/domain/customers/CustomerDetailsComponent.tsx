import React from 'react';

import Text from '../../common/text/Text';
import Paragraph from '../../common/paragraph/Paragraph';
import Box from '../../common/box/Box';

export interface CustomerData {
  comment?: string;
  contactMethod?: string;
  email?: string;
  firstName?: string;
  id: string;
  image?: string;
  invoicingType?: string;
  language?: string;
  lastName?: string;
  nickname?: string;
  phone?: string;
}

interface Props {
  data: any;
}

const CustomerDetails = ({ data }: Props) => {
  return (
    <Box>
      <Paragraph title="Asiakas">
        <Text color="brand" size="xs">
          {data.name}
        </Text>
      </Paragraph>
      <Paragraph>
        <Text color="standard" size="s">
          {data.contactMethod}
        </Text>
        <Text color="standard" size="s">
          {data.email}
        </Text>
      </Paragraph>
    </Box>
  );
};

export default CustomerDetails;
