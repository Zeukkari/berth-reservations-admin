import React from 'react';
import classNames from 'classnames';

import Icon from '../icon/Icon';
import { IconNames } from '../icon/Icon';
import styles from './button.module.scss';

interface Props {
  icon?: IconNames;
  label: string;
  className?: string;
  onClick?(): never;
}

export default ({ icon, label, onClick, className }: Props) => {
  return (
    <button
      type="button"
      className={classNames(styles.button, className)}
      onClick={onClick}
    >
      <span>
        {icon && <Icon name={icon} width="1em" height="1em" />} {label}{' '}
      </span>
    </button>
  );
};
