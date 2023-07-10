import classNames from 'classnames';

import { Text } from '../../design-system/Typography';
import { Contact, ContactType } from '../Contact';

import styles from './Suggestion.module.scss';

interface Props {
  className?: string;
}

export const Suggestion: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames(styles.container, className)}>
      <Text className={styles.title}>
        Есть предложения как улучшить работу службы взыскания?
      </Text>
      <Text className={styles.callManager}>
        Позвоните руководителю!
      </Text>
      <Contact
        type={ContactType.TEL}
        title="+7(901)147-58-11"
      />
    </div>
  );
};
