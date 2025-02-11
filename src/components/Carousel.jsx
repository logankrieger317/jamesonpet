import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import images
import img3288 from '../Images/IMG_3288.jpg';
import img1671 from '../Images/IMG_1671.jpg';
import img1813 from '../Images/IMG_1813.jpg';
import img2254 from '../Images/IMG_2254.jpg';
import img2318 from '../Images/IMG_2318.jpg';
import img2625 from '../Images/IMG_2625.jpg';
import img2650 from '../Images/IMG_2650.jpg';
import img2825 from '../Images/IMG_2825.jpg';
import img2994 from '../Images/IMG_2994.jpg';
import img3007 from '../Images/IMG_3007.jpg';
import img3027 from '../Images/IMG_3027.jpg';
import malley from '../Images/Malley.jpg';

// import required modules
import { Navigation } from 'swiper/modules';

export default function Carousel() {
  return (
    <>
    <div className=''>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <div className="swiper-wrapper">
          <SwiperSlide><img src={img3288} alt='dog2' /></SwiperSlide>
          <SwiperSlide><img src={img1671} alt='dog3' /></SwiperSlide>
          <SwiperSlide><img src={img1813} alt='dog4' /></SwiperSlide>
          <SwiperSlide><img src={img2254} alt='dog5' /></SwiperSlide>
          <SwiperSlide><img src={img2318} alt='dog6' /></SwiperSlide>
          <SwiperSlide><img src={img2625} alt='dog7' /></SwiperSlide>
          <SwiperSlide><img src={img2650} alt='dog8' /></SwiperSlide>
          <SwiperSlide><img src={img2825} alt='dog9' /></SwiperSlide>
          <SwiperSlide><img src={img2994} alt='dog10' /></SwiperSlide>
          <SwiperSlide><img src={img3007} alt='dog11' /></SwiperSlide>
          <SwiperSlide><img src={img3027} alt='dog12' /></SwiperSlide>
          <SwiperSlide><img src={malley} alt='dog13' /></SwiperSlide>
        </div>
      </Swiper>
    </div>
    </>
  );
}
