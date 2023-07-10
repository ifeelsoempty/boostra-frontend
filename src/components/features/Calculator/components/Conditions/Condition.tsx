import React, { ReactNode, PropsWithChildren } from 'react';
import classNames from 'classnames';

import { Widget } from '../../../../design-system/Widget';
import { Text, TextTypes } from '../../../../design-system/Typography';
import { WidgetTypes } from '../../../../design-system/Widget/interfaces';

import styles from './Condition.module.scss';

interface Props {
  title: ReactNode;
  value: ReactNode;
  disabledValue?: ReactNode;
  widgetValue?: ReactNode;
}

export const Condition: React.FC<PropsWithChildren<Props>> = ({
  title, disabledValue, value, widgetValue,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.valueContainer}>
        {disabledValue && (
          <Text
            type={TextTypes.Caption}
            className={classNames(styles.value, styles.disabledValue)}
          >
            {disabledValue}
          </Text>
        )}
        <Text className={classNames(styles.value, styles.valueActive)}>
          {value}
        </Text>
        {widgetValue && (
          <Widget
            center
            className={styles.widget}
            type={WidgetTypes.SMALL}
          >
            {widgetValue}
          </Widget>
        )}
      </div>
    </div>
  );
};
