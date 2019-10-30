import React from 'react';

import Icon from './Icon';

export default {
  component: Icon,
  title: 'Type/Icon',
};

export const withDefinedHeight = () => <Icon name="helsinkiLogo" width="50" />;

export const helsinkiLogo = () => <Icon name="helsinkiLogo" />;
