"use client"
import Image from "next/image";
//imports images slider offers 
// import slide1 from '../../../../public/images/FreeMax-Ruby-Portal-825x340-Shopping.webp'
// import slide2 from '../../../../public/images/elkebeer.webp'
// import slide3 from '../../../../public/images/Orange Portal.webp'
// import slide4 from '../../../../public/images/afreh kedh kedh.webp'
// import library swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
// import style sheet scss slider 
import stylesSlider from  './SliderPhotos.module.scss'
import { sliderPhotos} from "@/app/types/types";




export default function SliderPhotos({children,countSlide}:sliderPhotos) {
       // console.log(children)
       return (
              <Swiper className={`${stylesSlider.slider} | mySwiper`} 
                     modules={[Autoplay]} 
                     breakpoints= {{
                            0: { slidesPerView: countSlide.sm },
                            700: { slidesPerView: countSlide.md || countSlide.sm },
                            1000: { slidesPerView: countSlide.lg || countSlide.md || countSlide.sm}}} 
                     autoplay={{delay: 3000, disableOnInteraction: false}}
              >
                     {children.map((img, index) => {
                     if(img.props && img.props.src){
                            return (
                                   <SwiperSlide key={index} className="px-3 -z-10 relative">
                                          <Image className={`${img.props.className} w-full h-full object-cover rounded-lg`} 
                                                 src={img.props.src.src} 
                                                 alt={img.props.alt} 
                                                 loading="lazy" 
                                                 width={img.props.src.width} 
                                                 height={img.props.src.height} 
                                          />
                                   </SwiperSlide>
                            )
                     }
                     })}                     
              </Swiper>
       );
}

