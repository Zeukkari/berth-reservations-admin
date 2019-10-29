import React from 'react';

import Card from './Card';
import Paragraph from '../paragraph/Paragraph';
import LabelValuePair from '../labelValuePair/LabelValuePair';
import Title from '../title/Title';


const P1 = () => (
  <Paragraph>
    <LabelValuePair label="Nimi" value="Mikko Mallintaja" />
    <LabelValuePair label="SOTU" value="010101-123A" />
    <LabelValuePair label="ID" value="123456789" />
  </Paragraph>
);

const P2 = () => (
  <Paragraph>
    <Title>Yhteystiedot</Title>
    <LabelValuePair label="Puhelin" value="+358 100 100" />
    <LabelValuePair label="Sähköposti" value="etunimi.sukunimi@gmail.com" />
    <LabelValuePair label="Osoite" value="Keskuskatu 4 A 30 00100 Helsinki" />
  </Paragraph>
);

const P3 = () => (
  <Paragraph>
    <Title>Asiakasryhmä</Title>
    <p>Yksityinen asiakas</p>
  </Paragraph>
);

export default {
  component: Card,
  title: 'Components/Card',
};

const content = P1;

export const sampleCard = () => (
  <Card title="Asiakastiedot">
    <P1 />
    <hr />
    <P3 />
    <hr />
    <P2 />
  </Card>
);

export const emptyCard = () => <Card title="Hakemukset (0)">{content}</Card>;
