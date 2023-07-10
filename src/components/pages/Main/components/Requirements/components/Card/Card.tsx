import classNames from 'classnames';

import { Text } from '../../../../../../design-system/Typography';
import { Widget } from '../../../../../../design-system/Widget';

import styles from './Card.module.scss';

interface Props {
    className?: string;
    title: string;
    img: {
      src: string;
      alt: string;
    };
}

export const Card: React.FC<Props> = ({ className, title, img }) => {
  return (
    <Widget className={classNames(styles.container, className)}>
      <img
        className={styles.image}
        alt={img.alt}
        src={img.src}
      />
      <Text className={styles.title}>
        {title}
      </Text>
    </Widget>
  );
};
