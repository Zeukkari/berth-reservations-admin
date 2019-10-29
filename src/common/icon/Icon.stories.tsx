import React from 'react';

import Icon from './Icon';

export default {
  component: Icon,
  title: 'Atoms/Icon',
};

export const helsinkiLogo = () => <Icon name="helsinkiLogo" />;

export const withDefinedHeight = () => <Icon name="helsinkiLogo" width="50" />;
