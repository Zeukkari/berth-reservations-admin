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
  <>
    {title && <header className={styles.card}>{title}</header>}
    <Box {...passthroughProps}>{children}</Box>
  </>
);

export default Card;
