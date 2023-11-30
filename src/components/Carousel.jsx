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
        
        <SwiperSlide><img src='poodle.jpeg' ></img></SwiperSlide>
        <SwiperSlide><img src='https://theuniversityanimalclinic.com/wp-content/uploads/2020/12/toy-poodle.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='https://www.cesarsway.com/wp-content/uploads/2019/06/AdobeStock_56951807-1024x681.jpeg.webp'></img></SwiperSlide>
        <SwiperSlide><img src='https://assets.website-files.com/611beecc2a6b93312a409b6d/61f87a0a37452802abca4ad3_All%20footage%20.01_26_03_19.Still003.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1000w,f_auto,q_auto:eco,dpr_2.0/newscms/2018_15/1331283/dog-groomer-today-180411-main-art.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='https://www.animalfunfacts.net/images/stories/pets/dogs/pomeranian_dog_groomer_l.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='https://www.hunterslodge.org.uk/wp-content/uploads/2022/03/dreamstime_s_89604172.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='https://lirp.cdn-website.com/9c264ad8/dms3rep/multi/opt/Groom2-4560x3648-1920w.jpg'></img></SwiperSlide>
        <SwiperSlide><img src='https://lirp.cdn-website.com/9c264ad8/dms3rep/multi/opt/Gracie-3000x2400-1920w.jpg'></img></SwiperSlide>
        
      </Swiper>
      </div>
    </>
  );
}
