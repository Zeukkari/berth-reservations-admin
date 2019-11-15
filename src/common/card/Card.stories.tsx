import React from 'react';

import Card from './Card';
import Box from '../box/Box';
import Paragraph from '../paragraph/Paragraph';
import LabelValuePair from '../labelValuePair/LabelValuePair';

export default {
  component: Card,
  title: 'Card',
};

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

const P4 = () => (
  <Paragraph title="Asiakasryhmä">
    flex full
    <p>foo</p>
    <p>foo</p>
    <p>foo</p>
    <p>foo</p>
  </Paragraph>
);

const MockCard = () => (
  <Card title="Asiakastiedot">
    <P1 />
    <hr />
    <P3 />
    <hr />
    <P2 />
  </Card>
);

const MockCard2 = () => (
  <Card title="Asiakastiedot">
    <Paragraph>
      <P4 />
      <P1 />
    </Paragraph>
    <hr />
    <P3 />
    <hr />
    <P2 />
  </Card>
);

export const sampleCard = () => (
  <>
    <Card title="default">default</Card>

    <Card title="1/4" flex="1" basis="1/4">
      flex half
    </Card>

    <Card title="1/2" flex="1" basis="1/2">
      flex half
    </Card>

    <Card title="3/4" flex="1" basis="3/4">
      flex half
    </Card>

    <MockCard />
  </>
);

export const sampleCards2 = () => <MockCard2 />;
