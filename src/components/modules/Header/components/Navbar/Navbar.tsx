import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { BaseRoutes } from '../../../../../routes/base';

import styles from './Navbar.module.scss';

interface Props {
  className?: string;
}

export const Navbar: React.FC<Props> = ({ className }) => {
  return (
    <div className={classNames(styles.items, className)}>
      <Link
        className={styles.link}
        to={BaseRoutes.Partners}
      >
        Партнеры
      </Link>
      <Link
        className={styles.link}
        to={BaseRoutes.Info}
      >
        Условия
      </Link>
      <Link
        className={styles.link}
        to={BaseRoutes.Contacts}
      >
        Контакты
      </Link>
    </div>
  );
};
