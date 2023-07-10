import React, { PropsWithChildren } from 'react';
import ReactSlider, { ReactSliderProps } from 'react-slider';

import { Widget } from '../../design-system/Widget';
import { WidgetTypes } from '../../design-system/Widget/interfaces';
import { Text } from '../../design-system/Typography';

import styles from './RangeSlider.module.scss';

type Props = {
    className?: string;
    title?: string;
    output?: string;
} & ReactSliderProps;

export const RangeSlider: React.FC<PropsWithChildren<Props>> =
({ children, title, output, ...props }) => {
  const { min, max } = props;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Text>
          {title}
        </Text>
        <Widget
          center
          type={WidgetTypes.SMALL}
          className={styles.itemValue}
        >
          {output}
        </Widget>
      </div>
      <ReactSlider
        {...props}
        className={styles.slider}
        thumbClassName={styles.thumb}
      />
      <div className={styles.valueNavigation}>
        <Text>
          {min}
        </Text>
        <Text>
          {max}
        </Text>
      </div>
    </div>
  );
};
