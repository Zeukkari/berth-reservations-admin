import React from 'react';

import Header from './Header';
import Icon from '../icon/Icon';

export default {
  component: Header,
  title: 'Type/Header',
};

export const simpleHeader = () => (
  <Header>
    <h3>Asiakastiedot</h3>
  </Header>
);

export const sampleHeader = () => (
  <Header>
    <Icon name="helsinkiLogo" />
  </Header>
);
