import React from 'react';
import classNames from 'classnames';

import styles from './header.module.scss';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Header = ({ children, className }: Props) => (
  <header className={classNames(styles.header, className)}>{children}</header>
);

export default Header;
