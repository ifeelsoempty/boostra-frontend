import React, { PropsWithChildren, useState, useMemo } from 'react';
import { Swiper, SwiperProps, SwiperClass } from 'swiper/react';

import { Dot } from './components/Dot';
import 'swiper/css';
import styles from './Slider.module.scss';

type Props = {
    slidesPerView?: number;
} & SwiperProps;

export const Slider: React.FC<PropsWithChildren<Props>> =
({ children, slidesPerView = 2, spaceBetween = 10, ...props }) => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const dots = useMemo(() => {
    // TODO: Не работает когда loop: true
    const slides = swiper?.snapGrid;

    return (
      <>
        {slides?.map((_, index) => (
          <Dot
            active={index === activeIndex}
            onClick={() => {
              swiper?.slideTo(index);
            }}
            key={index}
          />
        ))}
      </>
    );
  }, [swiper, activeIndex]);

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className={styles.container}>
      <Swiper
        {...props}
        onSwiper={setSwiper}
        onSlideChange={handleSlideChange}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
      >
        {children}
      </Swiper>
      <div className={styles.pagination}>
        {dots}
      </div>
    </div>
  );
};
