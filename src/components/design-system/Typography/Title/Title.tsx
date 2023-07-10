import React, { ReactNode } from 'react';
import cx from 'classnames';

import { TitleTypes } from './interfaces';

import styles from './Title.module.scss';

interface Props {
  children?: ReactNode;
  className?: string;
  type?: TitleTypes;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Title: React.FC<Props> = ({
  children,
  className,
  type = TitleTypes.Default,
  level = 1,
}) => {
  return React.createElement(`h${level}`, { className: cx(styles.container, styles[type], styles[`h${level}`], className) }, children);
};
