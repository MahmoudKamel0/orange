"use client"
import Image from "next/image";
//imports images slider offers 
import slide1 from '../../../../public/images/FreeMax-Ruby-Portal-825x340-Shopping.webp'
import slide2 from '../../../../public/images/elkebeer.webp'
import slide3 from '../../../../public/images/Orange Portal.webp'
import slide4 from '../../../../public/images/afreh kedh kedh.webp'
// import library swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
// import style sheet scss slider 
import stylesSlider from  './Slider.module.scss'



export default function Slider() {
       return (
              <Swiper className={`${stylesSlider.slider} | mySwiper`} modules={[Autoplay]} autoplay={{delay: 3000, disableOnInteraction: false}}>
                     <SwiperSlide className="px-3"><Image className="w-full h-full object-cover rounded-lg" src={slide1} alt="ads" loading="lazy" /></SwiperSlide>
                     <SwiperSlide className="px-3"><Image className="w-full h-full object-cover rounded-lg" src={slide2} alt="ads" loading="lazy" /></SwiperSlide>
                     <SwiperSlide className="px-3"><Image className="w-full h-full object-cover rounded-lg" src={slide3} alt="ads" loading="lazy" /></SwiperSlide>
                     <SwiperSlide className="px-3"><Image className="w-full h-full object-cover rounded-lg" src={slide4} alt="ads" loading="lazy" /></SwiperSlide>

                     {/* {images.map(function(image , index){
                            return (
                                   <SwiperSlide key={index} className="px-3">
                                          <Image className="w-full h-full object-cover rounded-lg" src={image.image} alt={image.alt} loading="lazy" />
                                   </SwiperSlide>
                            )
                     })} */}

                     {/* {images.map(function(image){
                            return (
                                   <SwiperSlide key={image.id} className="px-3">
                                          <Image className="w-full h-full object-cover rounded-lg" src={image.image} alt={image.alt} loading="lazy" />
                                   </SwiperSlide>
                            )
                     })} */}
              </Swiper>
       );
}

