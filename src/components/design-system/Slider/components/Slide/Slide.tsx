import React, { PropsWithChildren } from 'react';
import { SwiperSlide, SwiperSlideProps } from 'swiper/react';

type Props = {
    className?: string;
} & SwiperSlideProps;

export const Slide: React.FC<PropsWithChildren<Props>> = ({ children, ...props }) => {
  return (
    <SwiperSlide {...props}>
      {children}
    </SwiperSlide>
  );
};

Slide.displayName = 'SwiperSlide';
