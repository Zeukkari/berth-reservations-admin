import React from 'react';

import styles from './title.module.scss';

const Header = ({ children }: { children: React.ReactNode }) => (
  <header className={styles.header}>{children}</header>
);

export default Header;
