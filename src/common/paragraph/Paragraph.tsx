import React from 'react';
import classNames from 'classnames';

import styles from './paragraph.module.scss';
import Title from '../title/Title';

interface Props {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Paragraph = ({ title, children, className }: Props) => (
  <p className={classNames(styles.paragraph, className)}>
    {title && <Title>{title}</Title>}

    {children}
  </p>
);

export default Paragraph;
