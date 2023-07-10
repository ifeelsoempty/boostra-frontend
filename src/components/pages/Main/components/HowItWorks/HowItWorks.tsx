import { Title } from '../../../../design-system/Typography/Title';
import { InfoCard } from '../../../../features/InfoCard';

import styles from './HowItWorks.module.scss';

interface Props {
    className?: string;
}

export const HowItWorks: React.FC<Props> = () => {
  return (
    <div className={styles.container}>
      <Title level={2}>
        Как это работает
      </Title>
      <div className={styles.cards}>
        <InfoCard
          number="01"
          title="Оформите заявку"
          description="У Вас это займет не более 10 минут "
        />
        <InfoCard
          number="02"
          title="Дождитесь ответа"
          description="Мы дадим ответ в течение 5 минут"
        />
        <InfoCard
          number="03"
          title="Мгновенно получите деньги"
          description="На банковскую карту"
        />
      </div>
    </div>
  );
};
