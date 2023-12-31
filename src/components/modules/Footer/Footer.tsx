import { getPublicURL } from '../../../helpers/getPublicURL';
import {
  Text,
} from '../../design-system/Typography';
import { Suggestion } from '../../features/Suggestion';

import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Text className={styles.fyi}>
          МКК ООО «Бустра» не привлекает денежные средства физических лиц, в том
          <br />
          числе индивидуальных предпринимателей, не являющихся учредителями
          <br />
          организации МКК ООО «Бустра», номер в реестре МФО 1703336008323
        </Text>
        <Suggestion className={styles.suggestion} />
      </div>
      <div className={styles.paymentMethods}>
        <img src={getPublicURL('/images/payment-methods/visa.svg')} />
        <img src={getPublicURL('/images/payment-methods/master-card.yellow.svg')} />
        <img src={getPublicURL('/images/payment-methods/master-card.blue.svg')} />
        <img src={getPublicURL('/images/payment-methods/mir.svg')} />
      </div>
    </div>
  );
};
