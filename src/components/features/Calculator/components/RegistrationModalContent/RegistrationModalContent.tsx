import { Text, Title } from '../../../../design-system/Typography';
import { Button, ButtonType } from '../../../../design-system/Button';

import styles from './RegistrationModalContent.module.scss';
import { ButtonSizes } from '../../../../design-system/Button/interfaces';

export const RegistrationModalContent: React.FC = () => {
  return (
    <div className={styles.container}>
      <Title
        className={styles.title}
        level={4}
      >
        Введите номер телефона
      </Title>
      <Text className={styles.description}>
        Мы пришлём СМС с кодом для продолжения оформления заявки
      </Text>
      <Button
        type={ButtonType.PRIMARY}
        size={ButtonSizes.LARGE}
      >
        Подтвердить номер
      </Button>
    </div>
  );
};
