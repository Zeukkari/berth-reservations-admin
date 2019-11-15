import React from 'react';

import Box, { Props as BoxProps } from '../box/Box';
import styles from './card.module.scss';

const Card = ({
  title,
  children,
  ...passthroughProps
}: {
  title?: string;
  children: React.ReactNode;
  passthroughProps?: BoxProps;
}) => (
  <Box {...passthroughProps}>
    {title && <header className={styles.card}>{title}</header>}
    <>{children}</>
  </Box>
);

export default Card;
