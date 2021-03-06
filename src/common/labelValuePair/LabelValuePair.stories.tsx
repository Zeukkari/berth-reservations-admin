import React from 'react';

import LabelValuePair from './LabelValuePair';

export default {
  component: LabelValuePair,
  title: 'LabelValuePair',
};

const dummyProps = { label: 'foo', value: 'bar' };

export const labelValuePair = () => <LabelValuePair {...dummyProps} />;

labelValuePair.story = {
  name: 'Default',
};

export const branded = () => (
  <LabelValuePair {...dummyProps} labelColor="brand" />
);
