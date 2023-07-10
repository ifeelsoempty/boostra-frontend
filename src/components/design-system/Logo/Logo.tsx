import { getPublicURL } from '../../../helpers/getPublicURL';

import styles from './Logo.module.scss';

export const Logo: React.FC = () => {
  return (
    <div>
      <img
        className={styles.image}
        alt="Logo"
        src={getPublicURL('/images/boostra-logo.dark.png')}
      />
    </div>
  );
};
