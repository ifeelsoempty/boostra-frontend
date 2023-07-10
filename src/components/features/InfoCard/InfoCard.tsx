import React, { ReactNode, PropsWithChildren } from 'react';
import classNames from 'classnames';

import { Title, TitleTypes } from '../../design-system/Typography/Title';
import { Text, TextTypes } from '../../design-system/Typography';
import { Widget } from '../../design-system/Widget';

import styles from './InfoCard.module.scss';

interface Props {
  number?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
  caption?: ReactNode;
  className?: string;
}

export const InfoCard: React.FC<PropsWithChildren<Props>> = ({
  number,
  title,
  description,
  caption,
  className,
  children,
}) => {
  return (
    <Widget className={classNames(styles.container, className)}>
      {number && (
        <Title
          className={styles.number}
          type={TitleTypes.Primary}
          level={2}
        >
          {number}
        </Title>
      )}
      {title && (
        <Title
          className={styles.title}
          level={5}
        >
          {title}
        </Title>
      )}
      {description && (
        <Text className={styles.description}>
          {description}
        </Text>
      )}
      {caption && (
        <Text type={TextTypes.Caption}>
          {caption}
        </Text>
      )}
      {children}
    </Widget>
  );
};
