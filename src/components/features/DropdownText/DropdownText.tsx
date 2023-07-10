import React, { ReactNode, useEffect, useState, useCallback, useRef } from 'react';
import classNames from 'classnames';

import { InfoCard } from '../InfoCard';
import { Text, TextTypes, Title } from '../../design-system/Typography';

import styles from './DropdownText.module.scss';

interface Props {
  title: ReactNode;
  description: ReactNode;
  className?: string;
}

const DESCRIPTION_ABSOLUTE_MARGIN_TOP = 25;

export const DropdownText: React.FC<Props> = ({ title, description, className }) => {
  const [isActive, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      if (isActive) {
        const descriptionHeight = descriptionRef.current?.clientHeight || 0;
        const titleHeight = titleRef.current?.clientHeight || 0;
        const descriptionMarginTop = DESCRIPTION_ABSOLUTE_MARGIN_TOP - titleHeight;

        ref.current.style.height = `${descriptionHeight + titleHeight + descriptionMarginTop}px`;
      }
      else {
        const titleHeight = titleRef.current?.clientHeight || 0;

        ref.current.style.height = `${titleHeight}px`;
      }
    }
  }, [isActive]);

  return (
    <InfoCard className={className}>
      <div
        ref={ref}
        className={styles.container}
      >
        <div
          ref={titleRef}
          className={classNames(styles.title, { [styles.activeTitle]: isActive })}
          onClick={() => setActive(!isActive)}
        >
          <Title level={6}>
            {title}
          </Title>
          <img
            className={styles.cross}
            alt="toggle faq item"
            src="/images/design-system/cross.svg"
          />
        </div>
        <div
          ref={descriptionRef}
          style={{ top: DESCRIPTION_ABSOLUTE_MARGIN_TOP }}
          className={styles.description}
        >
          <Text type={TextTypes.Caption}>
            {description}
          </Text>
        </div>
      </div>
    </InfoCard>
  );
};
