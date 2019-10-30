import React from 'react';

import Header from './Header';
import Icon from '../icon/Icon';
import Button from '../button/Button';

export default {
  component: Header,
  title: 'Type/Header',
};

export const simpleHeader = () => (
  <Header
    brand={<h3>Asiakastiedot</h3>}
    navLinks={<h3>Asiakastiedot</h3>}
  ></Header>
);

const DummyButton = () => <Button icon="pole" label="Tool" />;

export const sampleHeader = () => (
  <Header
    brand={
      <>
        <Icon name="helsinkiLogo" height="3em" />
        <h3>Asiakastiedot</h3>
      </>
    }
    navLinks={<><DummyButton /><DummyButton /><DummyButton /></>}
  />
);
