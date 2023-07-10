import React, { ReactNode, useEffect, useState, useCallback } from 'react';
import classNames from 'classnames';

import { Text } from '../../design-system/Typography';
import { Dot } from '../../design-system/Slider/components/Dot';
import { Widget } from '../../design-system/Widget';

import styles from './TimeSwitchBanner.module.scss';

interface Props {
  values: ReactNode[];
  interval?: number;
  className?: string;
}

// TODO: Переделать на либу слайдера

export const TimeSwitchBanner: React.FC<Props> = ({ values, interval = 3000, className }) => {
  const [value, setValue] = useState(values[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const pickNextValue = useCallback(() => {
    setCurrentIndex(() => {
      let nextIndex = 0;

      if (currentIndex < values.length - 1) {
        nextIndex = currentIndex + 1;
      }

      setValue(values[nextIndex]);

      return nextIndex;
    });
  }, [currentIndex, value]);

  useEffect(() => {
    const id = setInterval(() => {
      pickNextValue();
    }, interval);

    return () => {
      clearInterval(id);
    };
  }, [value, currentIndex]);

  const onClick = useCallback(() => {
    pickNextValue();
  }, [pickNextValue]);

  return (
    <div className={classNames(styles.container, className)}>
      <Widget
        onClick={onClick}
        className={styles.banner}
      >
        <Text className={styles.bannerText}>
          {value}
        </Text>
      </Widget>
      <div className={styles.dots}>
        {values.map((value, index) => (
          <Dot
            active={index === currentIndex}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
