import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Banner1 from '../../../../public/Banner1.jpg';
import Banner2 from '../../../../public/Banner2.jpg';
import Banner3 from '../../../../public/Banner3.jpg';

import './style.css';

import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

export default function Banner() {
  return (
    <div className="container mx-auto py-4 px-4 sm:px-10 md:px-20 lg:px-[150px]">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Banner1} alt="Banner" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner2} alt="Banner" className="w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner3} alt="Banner" className="w-full" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
