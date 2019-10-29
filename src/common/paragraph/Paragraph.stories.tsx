import React from 'react';

import Paragraph from './Paragraph';
import LabelValuePair from '../labelValuePair/LabelValuePair';
import Title from '../title/Title';

export default {
  component: Paragraph,
  title: 'Atoms/Paragraph',
};

export const plain = () => (
  <Paragraph>
    <LabelValuePair label="Jono nro" value="245" />
    <LabelValuePair label="Kirjattu" value="23.8.2019 kello 21.06" />
    <LabelValuePair label="Status" value="Ei käsitelty" />
  </Paragraph>
);

export const text = () => <Paragraph>lorem ipsum</Paragraph>;

export const textWithTitle = () => (
  <Paragraph>
    <Title>Asiakasryhmä</Title>
    <p>Yksityinen asiakas</p>
  </Paragraph>
);

export const fieldWithTitle = () => (
  <Paragraph>
    <Title>Hakemukset(1)</Title>
    <LabelValuePair label="Jono nro" value="245" />
    <LabelValuePair label="Kirjattu" value="23.8.2019 kello 21.06" />
    <LabelValuePair label="Status" value="Ei käsitelty" />
  </Paragraph>
);

export const textWithContacts = () => (
  <Paragraph>
    <Title>Yhteystiedot</Title>
    <LabelValuePair label="Puhelin" value="+358 100 100" />
    <LabelValuePair label="Sähköposti" value="etunimi.sukunimi@gmail.com" />
    <LabelValuePair label="Osoite" value="Keskuskatu 4 A 30 00100 Helsinki" />
  </Paragraph>
);
