import React from 'react';

import Text from '../../common/text/Text';
import Paragraph from '../../common/paragraph/Paragraph';
import Card from '../../common/card/Card';
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
    <Box flex="1" flexDirection="row">
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Card flex="1" basis="1/2">
          <Paragraph>
            <Text color="brand" size="xs">
              {data.name}
            </Text>{' '}
          </Paragraph>
          <Paragraph title="Osoite">
            <Text color="brand" size="xs">
              <Text color="brand" size="xs">
                {data.name}
              </Text>
            </Text>
          </Paragraph>
          <Paragraph>
            <Text color="brand" size="xs">
              {data.name}
            </Text>
          </Paragraph>
        </Card>
        <Card flex="1" basis="1/2">
          <Paragraph>
            <Text color="brand" size="xs">
              {data.name}
            </Text>{' '}
          </Paragraph>
          <Paragraph title="Osoite">
            <Text color="brand" size="xs">
              <Text color="brand" size="xs">
                {data.name}
              </Text>
            </Text>
          </Paragraph>
          <Paragraph>
            <Text color="brand" size="xs">
              {data.name}
            </Text>
          </Paragraph>
        </Card>
        <Card flex="1" basis="1/2">
          <Paragraph>
            <Text color="brand" size="xs">
              {data.name}
            </Text>{' '}
          </Paragraph>
          <Paragraph title="Osoite">
            <Text color="brand" size="xs">
              <Text color="brand" size="xs">
                {data.name}
              </Text>
            </Text>
          </Paragraph>
          <Paragraph>
            <Text color="brand" size="xs">
              {data.name}
            </Text>
          </Paragraph>
        </Card>
      </div>
    </Box>
  );
};

export default CustomerDetails;
