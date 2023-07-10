import React, { ReactNode } from 'react';
import cx from 'classnames';

import { TextTypes } from './interfaces';

import styles from './Text.module.scss';

interface Props {
  children?: ReactNode;
  className?: string;
  type?: TextTypes;
  onClick?: () => void;
}

export const Text: React.FC<Props> = ({
  children,
  className,
  type,
  onClick,
}) => {
  return (
    <span
      onClick={onClick}
      className={cx(type && styles[type], className)}
    >
      {children}
    </span>
  );
};
