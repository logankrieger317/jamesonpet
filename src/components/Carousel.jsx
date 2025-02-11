import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import optimized images
import img3288 from '../Images/optimized/IMG_3288.webp';
import img1671 from '../Images/optimized/IMG_1671.webp';
import img1813 from '../Images/optimized/IMG_1813.webp';
import img2254 from '../Images/optimized/IMG_2254.webp';
import img2318 from '../Images/optimized/IMG_2318.webp';
import img2625 from '../Images/optimized/IMG_2625.webp';
import img2650 from '../Images/optimized/IMG_2650.webp';
import img2825 from '../Images/optimized/IMG_2825.webp';
import img2994 from '../Images/optimized/IMG_2994.webp';
import img3007 from '../Images/optimized/IMG_3007.webp';
import img3027 from '../Images/optimized/IMG_3027.webp';
import malley from '../Images/optimized/Malley.webp';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

const images = [
  { src: img3288, alt: 'Professional dog grooming' },
  { src: img1671, alt: 'Dog grooming service' },
  { src: img1813, alt: 'Pet grooming' },
  { src: img2254, alt: 'Dog spa treatment' },
  { src: img2318, alt: 'Dog washing service' },
  { src: img2625, alt: 'Professional pet care' },
  { src: img2650, alt: 'Dog styling' },
  { src: img2825, alt: 'Pet grooming service' },
  { src: img2994, alt: 'Dog grooming expertise' },
  { src: img3007, alt: 'Professional dog care' },
  { src: img3027, alt: 'Pet styling service' },
  { src: malley, alt: 'Dog grooming showcase' }
];

export default function Carousel() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center bg-black">
            <div className="relative w-full h-[800px] flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="max-h-[750px] w-auto"
                  style={{
                    objectFit: 'contain',
                    maxWidth: 'calc(750px * 1.33)', // 4:3 aspect ratio
                  }}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
