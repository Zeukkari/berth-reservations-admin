import React from 'react';

import Header from './Header';
import Icon from '../icon/Icon';

export default {
  component: Header,
  title: 'Header',
};

export const simpleHeader = () => (
  <Header
    brand={<h3>Asiakastiedot</h3>}
  ></Header>
);

export const sampleHeader = () => (
  <Header
    brand={<Icon name="helsinkiLogo"  />}
  />
);
