import React from 'react';
import { action } from '@storybook/addon-actions';

import ApplicationsIcon from './ApplicationsIcon';
import BoatIcon from './BoatIcon';
import BusinessIcon from './BusinessIcon';

export default {
  component: ApplicationsIcon,
  title: 'ApplicationsIcon',
};

export const button = () => (
  <>
    <h1>icon 1</h1>
    <ApplicationsIcon />;
    <br />
    <h1>icon 1</h1>
    <BoatIcon />
    <h1>icon 1</h1>
    <br />
    <BusinessIcon />
  </>
);

button.story = {
  name: 'Default',
};
