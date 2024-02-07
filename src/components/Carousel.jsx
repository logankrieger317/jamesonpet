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
        <SwiperSlide><img src='../src/Images/IMG_3288.jpg' alt='dog2'></img></SwiperSlide>
        <SwiperSlide><img src='../src/Images/IMG_1671.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='../src/Images/IMG_1813.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='../src/Images/IMG_2254.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='../src/Images/IMG_2318.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='../src/Images/IMG_2625.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='../src/Images/IMG_2650.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='../src/Images/IMG_2825.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='../src/Images/IMG_2994.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='../src/Images/IMG_3007.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='../src/Images/IMG_3027.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='../src/Images/Malley.jpg'></img></SwiperSlide>

        </div>
      </Swiper>
      
    </div>
    </>
  );
}
