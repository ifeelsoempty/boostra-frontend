import { InfoCard } from '../../../../features/InfoCard';
import { Description } from './components/Description';
import { Button } from '../../../../design-system/Button';
import { Text, TextTypes, Title } from '../../../../design-system/Typography';

import styles from './FirstLoan.module.scss';

export const FirstLoan: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* TODO: Переделать на общий компонент c компонентом FAQ */}
      <InfoCard description={<Description />} />
      <Button className={styles.button}>
        <Title level={5}>
          Условия акции «Первый заём»
        </Title>
      </Button>
      <Text type={TextTypes.Caption}>
        Оформить заём можно круглосуточно, в выходные и
        праздники. Подать заявку вы можете не только
        с компьютера, но и с любого мобильного устройства
      </Text>
    </div>
  );
};
