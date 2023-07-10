import { Title } from '../../../../design-system/Typography/Title';
import { InfoCard } from '../../../../features/InfoCard';
import { Slide, Slider } from '../../../../design-system/Slider';

import styles from './Reviews.module.scss';

interface Props {
    className?: string;
}

export const Reviews: React.FC<Props> = () => {
  return (
    <div className={styles.container}>
      <Title level={2}>
        Отзывы
      </Title>
      <div className={styles.cards}>
        <Slider
          autoHeight
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
        >
          <Slide>
            <InfoCard
              className={styles.review}
              description="«Быстрое и надежное МФО без каких-либо подводных камней.
                Прошел легкую и короткую регистрацию, подождал около 2-3 минут
                и получил одобрение на 9800 рублей. Еще попал на акцию первого
                займа, поэтому даже проценты не надо платить»"
              caption="Анатолий, Самара"
            />
          </Slide>
          <Slide>
            <InfoCard
              className={styles.review}
              description="«Обратилась впервые, посоветовал друг. Мне уже везде отказали из-
                за кредитной истории, а тут получила одобрение с первого раза.
                Регистрация быстрая и понятная, вообще ничего лишнего не просят
                заполнить, только самое необходимое»"
              caption="Евгения, Нижний Новгород"
            />
          </Slide>
          <Slide>
            <InfoCard
              className={styles.review}
              description="«К компании никаких претензий нет. Деньги выплачивают быстро, а это очень важно
                для меня. Процент в целом неплохой, есть куча компаний где проценты в разы больше. В будущем
                если будет необходимость в деньгах, то обращусь снова сюда.»"
              caption="Анастасия, Тюмень"
            />
          </Slide>
          <Slide>
            <InfoCard
              className={styles.review}
              description="«Одна из самых быстрых компаний. На все потратил максимум 15 минут, и деньги
                уже были у меня на карте. Горячая линия помогла разобраться со всеми вопросами, особенно хочу
                выделить Павла, который терпеливо отвечал на все мои вопросы.»"
              caption="Надежда, Смоленск"
            />
          </Slide>
          <Slide>
            <InfoCard
              className={styles.review}
              description="«Мне одобрили с ужасной кредитной историей, причем с первого раза. Никаких
                нареканий нет, отличная компания.»"
              caption="Марат, Челябинск"
            />
          </Slide>
          <Slide>
            <InfoCard
              className={styles.review}
              description="«Просто качественное и надежное МФО. Никаких отрицательных впечатлений.
                Обращаюсь к ним уже 5 раз, всегда одобряют. Причем с каждым займом статус лояльности повышается,
                у меня уже платина. Всем советую, отличная компания!»"
              caption="Кристина, Санкт-Петербург"
            />
          </Slide>
        </Slider>
      </div>
    </div>
  );
};
