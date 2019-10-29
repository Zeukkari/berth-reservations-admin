import React from 'react';

import LabelValuePair from './LabelValuePair';

export default {
  component: LabelValuePair,
  title: 'Atoms/LabelValuePair',
};

const dummyProps = { label: 'foo', value: 'bar' };

export const plain = () => <LabelValuePair {...dummyProps} />;

export const nimi = () => (
  <LabelValuePair label="Nimi" value="Mikko Mallikas" />
);

export const id = () => <LabelValuePair label="Id" value="123456789" />;

export const sotu = () => <LabelValuePair label="Sotu" value="010101-123A" />;
