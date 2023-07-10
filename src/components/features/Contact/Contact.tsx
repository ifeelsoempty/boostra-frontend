import classNames from 'classnames';

import {
  Text,
  TextTypes,
} from '../../design-system/Typography';
import { ContactType } from './interfaces';

import styles from './Contact.module.scss';

interface Props {
  type: ContactType;
  title: string;
  subtitle?: React.ReactNode;
}

export const Contact: React.FC<Props> = ({ title, subtitle, type }) => {
  return (
    <div className={styles.container}>
      <Text
        className={styles.block}
        type={TextTypes.Primary}
      >
        <a href={`${type}:${title}`}>
          {title}
        </a>
      </Text>
      {subtitle && (
        <Text className={classNames(styles.block, styles.info)}>
          {subtitle}
        </Text>
      )}
    </div>
  );
};
