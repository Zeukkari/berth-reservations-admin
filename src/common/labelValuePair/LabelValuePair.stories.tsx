import React from 'react';

import LabelValuePair from './LabelValuePair';

export default {
  component: LabelValuePair,
  title: 'Controls/LabelValuePair',
};

const dummyProps = { label: 'foo', value: 'bar' };

export const plain = () => <LabelValuePair {...dummyProps} />;
