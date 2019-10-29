import React from 'react';

import styles from './card.module.scss';


/*
const Button = (props: { children: React.ReactNode }) => (
  <button className={classnames(styles.footerButton, 'btn', 'btn-link')}>
    {props.children}
  </button>
);

const EditButton = (props: { children: React.ReactNode }) => (
  <button className={classnames(styles.editButton, 'btn', 'btn-link')}>
    {props.children}
  </button>
);
*/
/*
const HorizontalDelimiter = () => <hr className={styles.hruler} />;

const VerticalDelimiter = () => <hr className={styles.vdivider} />;

const Delimiter = () => (
  <div className="flex-fill">
    <VerticalDelimiter />
    <HorizontalDelimiter />
  </div>
);
*/

const Card = ({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => (
  <div>
    <div className={styles.container}>
      <header className={styles.mainheader}>{title}</header>
      <section>{children}</section>
    </div>
  </div>
);

export default Card;
