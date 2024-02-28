import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



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
        <SwiperSlide><img src='Images/IMG_3288.jpg' alt='dog2'></img></SwiperSlide>
        <SwiperSlide><img src='Images/IMG_1671.jpg' alt='dog3'></img></SwiperSlide>
        <SwiperSlide><img src='Images/IMG_1813.jpg' alt='dog4'></img></SwiperSlide>
        <SwiperSlide><img src='Images/IMG_2254.jpg' alt='dog5'></img></SwiperSlide>
        <SwiperSlide><img src='Images/IMG_2318.jpg' alt='dog6'></img></SwiperSlide>
        <SwiperSlide><img src='Images/IMG_2625.jpg' alt='dog7'></img></SwiperSlide>
        <SwiperSlide><img src='Images/IMG_2650.jpg' alt='dog8'></img></SwiperSlide>
        <SwiperSlide><img src='Images/IMG_2825.jpg' alt='dog9'></img></SwiperSlide>
        <SwiperSlide><img src='Images/IMG_2994.jpg' alt='dog10'></img></SwiperSlide>
        <SwiperSlide><img src='Images/IMG_3007.jpg' alt='dog11'></img></SwiperSlide>
        <SwiperSlide><img src='Images/IMG_3027.jpg' alt='dog12'></img></SwiperSlide>
        <SwiperSlide><img src='Images/Malley.jpg' alt='dog13'></img></SwiperSlide>

        </div>
      </Swiper>
      
    </div>
    </>
  );
}
