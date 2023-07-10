import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';

import { Text, TextTypes, Title } from '../../../../../../design-system/Typography';

import styles from './Description.module.scss';

export const Description: React.FC = () => {
  const [isActive, setActive] = useState(false);
  const [height, setHeight] = useState(0);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const height = innerRef.current?.clientHeight;

    if (height) {
      setHeight(height);
    }
  }, []);

  return (
    <div
      style={{ height }}
      className={classNames(styles.container, { [styles.active]: isActive })}
    >
      <div
        ref={innerRef}
        className={styles.inner}
      >
        <Text className={styles.title}>
          Онлайн-займы
        </Text>
        <Text>
          {' '}
          — это микрокредиты на сумму от 1000 до 30 000 сроком от 1 до 16
          дней c процентной ставкой от 0% до 1% в день.
          Заёмщик получает деньги на свою карту сразу после
          одобрения заявки, поданной онлайн на сайте.
          Кредиты выдаются МКК (микрокредитными организациями),
          зарегистрированными в Центральном банке.
        </Text>
        {!isActive && (
          <Text
            className={styles.nextText}
            onClick={() => setActive(true)}
            type={TextTypes.Primary}
          >
            Читать далее...
          </Text>
        ) }
      </div>
      <Text className={styles.nextText}>
        Деятельность МКК регулируется законом «О микрофинансовой деятельности".
        Первый заём до 30 000 рублей в Boostra клиент может получить бесплатно сроком до 16 дней.
      </Text>
    </div>
  );
};
