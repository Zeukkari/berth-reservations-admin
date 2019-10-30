import React from 'react';

import Button from './Button';
import styles from './button.module.scss';

export default {
  component: Button,
  title: 'Controls/Button',
};

export const defaultButton = () => <Button label="foo" />;

export const defaultButtonWithIcon = () => <Button icon="check" label="foo" />;

export const errorButtonWithIcon = () => (
  <Button icon="check" label="foo" className={styles.error} />
);
