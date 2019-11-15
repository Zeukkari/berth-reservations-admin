import React from 'react';

import Box from './Box';
import Card from '../card/Card';
import Paragraph from '../paragraph/Paragraph';
import LabelValuePair from '../labelValuePair/LabelValuePair';

export default {
  component: Box,
  title: 'Box',
};

export const box = () => (
  <>
    <Box>default</Box>
    <Box flex="1" basis="1/2">
      flex half
    </Box>
    <Box flex="1" basis="full">
      flex full
    </Box>
  </>
);

export const box2 = () => (
  <>
    <Box>default</Box>
    <Box flex="1" basis="1/2">
      flex half
    </Box>
    <Box flex="1" basis="full">
      flex full
    </Box>
  </>
);

export const box3 = () => (
  <Box flex="1" basis="2/3" flexDirection="row">
    <Box flex="1" basis="1/4">
      flex half
    </Box>
    <Box flex="1" basis="1/4">
      flex half
    </Box>
    <Box flex="1" basis="1/4">
      flex half
    </Box>
  </Box>
);

const P1 = () => (
  <Paragraph>
    <LabelValuePair label="Nimi" value="Mikko Mallintaja" />
    <LabelValuePair label="SOTU" value="010101-123A" />
    <LabelValuePair label="ID" value="123456789" />
  </Paragraph>
);

const P2 = () => (
  <Paragraph title="Yhteystiedot">
    <LabelValuePair label="Puhelin" value="+358 100 100" />
    <LabelValuePair label="Sähköposti" value="etunimi.sukunimi@gmail.com" />
    <LabelValuePair label="Osoite" value="Keskuskatu 4 A 30 00100 Helsinki" />
  </Paragraph>
);

const P3 = () => (
  <Paragraph title="Asiakasryhmä">
    <p>Yksityinen asiakas</p>
  </Paragraph>
);

export const defaultLayout = () => <Box>content</Box>;
const MockCard = () => (
  <Card title="Asiakastiedot">
    <P1 />
    <hr />
    <P3 />
    <hr />
    <P2 />
  </Card>
);

export const sampleCards2 = () => (
    <MockCard />
);


export const sampleCards = () => (
  <Box basis="1/2">
    <MockCard />
    <MockCard />
    <MockCard />
    <MockCard />
    <MockCard />
    <MockCard />
    <MockCard />
    <MockCard />
    <MockCard />
    <MockCard />
    <MockCard />
    <MockCard />
    <MockCard />
    <MockCard />
  </Box>
);
