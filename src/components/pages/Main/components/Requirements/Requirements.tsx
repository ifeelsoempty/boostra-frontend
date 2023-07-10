import { Card } from './components/Card';
import { Title } from '../../../../design-system/Typography/Title';
import { getPublicURL } from '../../../../../helpers/getPublicURL';

import styles from './Requirements.module.scss';

interface Props {
  className?: string;
}

interface Card {
  id: number;
  title: string;
  imgSrc: string;
}

const IMG_PATH = '/images/loan-requirements';

const CARDS: Card[] = [
  {
    id: 1,
    title: 'Возраст 18 лет',
    imgSrc: getPublicURL(`${IMG_PATH}/manager.png`),
  }, {
    id: 1,
    title: 'Паспорт гражданина РФ',
    imgSrc: getPublicURL(`${IMG_PATH}/passport.png`),
  }, {
    id: 1,
    title: 'Активный номер телефона',
    imgSrc: getPublicURL(`${IMG_PATH}/phone.png`),
  },
  {
    id: 1,
    title: 'Именная банковская карта',
    imgSrc: getPublicURL(`${IMG_PATH}/cards.png`),
  },
];

export const Requirements: React.FC<Props> = () => {
  return (
    <div className={styles.container}>
      <Title level={2}>
        Требования к заёмщику
      </Title>
      <div className={styles.cardList}>
        {CARDS.map((card) => (
          <Card
            className={styles.card}
            key={card.id}
            title={card.title}
            img={{
              src: card.imgSrc,
              alt: `requirement-${card.id}`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
