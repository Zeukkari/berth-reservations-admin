import React from 'react';
import classNames from 'classnames';

import styles from './title.module.scss';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Title = ({ children, className }: Props) => (
  <header className={classNames(styles.header, className)}>{children}</header>
);

export default Title;
