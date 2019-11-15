import React from 'react';

import Card from './Card';

export default {
  component: Card,
  title: 'Card',
};

export const sampleCard = () => (
  <>
    <Card title="default">default</Card>

    <Card title="1/4" flex="1" basis="1/4">
      flex half
    </Card>

    <Card title="1/2" flex="1" basis="1/2">
      flex half
    </Card>

    <Card title="3/4" flex="1" basis="3/4">
      flex half
    </Card>

    <Card title="full" flex="1" basis="full">
      flex full
      <p>foo</p>
      <p>foo</p>
      <p>foo</p>
      <p>foo</p>
    </Card>
  </>
);
