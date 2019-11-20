import React from 'react';

import Box, { Props as BoxProps } from '../box/Box';
import styles from './card.module.scss';

export type Props = {
  children: React.ReactNode;
  title?: string;
} & React.DOMAttributes<HTMLButtonElement> &
  BoxProps;

const Card: React.SFC<Props> = ({ title, children, ...passthroughProps }) => (
  <>
    {title && <header className={styles.card}>{title}</header>}
    <Box {...passthroughProps}>{children}</Box>
  </>
);

export default Card;
