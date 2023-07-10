import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

import { WidgetTypes } from './interfaces';

import styles from './Widget.module.scss';

interface Props {
  onClick?: () => void;
  className?: string;
  type?: WidgetTypes;
  center?: boolean;
}

export const Widget: React.FC<PropsWithChildren<Props>> =
({ onClick, className, type = WidgetTypes.DEFAULT, center, children }) => {
  return (
    <div
      onClick={onClick}
      className={classNames(styles.container, styles[type], center && styles.center, className)}
    >
      {children}
    </div>
  );
};
