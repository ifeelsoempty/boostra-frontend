import { useMemo } from 'react';

import { Title, Text, TextTypes } from '../../../../design-system/Typography';
import { Widget } from '../../../../design-system/Widget';
import { Calculator } from '../../../../features/Calculator';
import { SocialNetworks } from '../../../../features/SocialNetworks/SocialNetworks';
import { WidgetTypes } from '../../../../design-system/Widget/interfaces';
import { Image } from '../Image';

import styles from './CalculatorBlock.module.scss';

interface Props {
    className?: string;
}

export const CalculatorBlock: React.FC<Props> = () => {
  const timeGetMoney = useMemo(() => {
    const date = new Date;
    date.setMinutes(date.getMinutes() + 20);
    const minutes = date.getMinutes();

    return `${date.getHours() }:${minutes > 10 ? minutes : `0${minutes}`}`;
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleBlock}>
          <Title>
            Первый заём под
            {' '}
            <Text type={TextTypes.Primary}>
              0%
            </Text>
          </Title>
          <Widget
            center
            type={WidgetTypes.SMALL}
            className={styles.moneyReceiving}
          >
            Деньги у вас в
            {' '}
            {timeGetMoney}
          </Widget>
        </div>
        <Image className={styles.headerImage} />
        <SocialNetworks className={styles.socialNetworks} />
      </div>
      <div className={styles.body}>
        <Calculator className={styles.calculator} />
        <Image className={styles.image} />
      </div>
      <div className={styles.footer}>
        {/* TODO: Написать отдельный компонент ссылки */}
        <Text
          className={styles.link}
          type={TextTypes.Caption}
        >
          Положение о займе под 0% для новых клиентов
        </Text>
      </div>
    </div>
  );
};
