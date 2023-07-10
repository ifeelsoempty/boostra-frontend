import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { ButtonType, ButtonSizes } from './interfaces';

import styles from './Button.module.scss';

type Props = {
  type?: ButtonType;
  className?: string;
  size?: ButtonSizes;
} & HTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = ({
  size = ButtonSizes.SMALL,
  type = ButtonType.OUTLINE,
  className,
  ...restProps
}) => {
  return (
    <button
      className={classNames(
        styles.container,
        styles[type], size !== ButtonSizes.SMALL && styles[size],
        className,
      )}
      {...restProps}
    />
  );
};
