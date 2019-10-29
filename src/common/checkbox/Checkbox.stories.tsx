import React from 'react';

import Checkbox from './Checkbox';

export default {
  component: Checkbox,
  title: 'Atoms/Checkbox',
};

export const checked = () => <Checkbox checked />;

export const unChecked = () => <Checkbox />;
