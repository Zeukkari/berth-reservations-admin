import React from 'react';
import classNames from 'classnames';

import styles from './box.module.scss';

export type Props = {
  children: React.ReactNode;
  align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
  alignContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'stretch';
  alignSelf?: 'start' | 'center' | 'end' | 'stretch';
  basis?: 'auto' | 'full' | '1/2' | '1/3' | '2/3' | '1/4' | '2/4' | '3/4';
  justify?:
    | 'around'
    | 'between'
    | 'center'
    | 'end'
    | 'evenly'
    | 'start'
    | 'stretch';
  flexDirection?: 'column' | 'row';
  flex?: '1' | '0';
} & React.DOMAttributes<HTMLButtonElement>;

const Box: React.SFC<Props> = ({
  children,
  align = 'start',
  alignContent = 'contained',
  alignSelf = 'standard',
  basis = 'auto',
  flexDirection = 'column',
  justify,
  flex = 1,
}) => (
  <div className={classNames(styles.container)}>
    <div
      data-align={align}
      data-aligncontent={alignContent}
      data-alignself={alignSelf}
      data-basis={basis}
      data-flex-direction={flexDirection}
      data-justify-content={justify}
      className={classNames(styles.box, styles.flex, styles.basis)}
    >
      {children}
    </div>
  </div>
);

export default Box;
