import React from 'react';
import classNames from 'classnames';

import styles from './header.module.scss';

interface Props {
  brand?: React.ReactNode;
  navLinks?: React.ReactNode;
  className?: string;
}

const Header = ({ brand, navLinks, className }: Props) => (
  <header className={classNames(styles.header, className)}>
    <div className={styles.brand}>{brand}</div>
    <div className={styles.navLinks}>{navLinks}</div>
  </header>
);

export default Header;
