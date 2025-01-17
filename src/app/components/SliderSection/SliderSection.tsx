"use client"
// import library swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import { sliderSection } from "@/app/types/types";
// import style sheet scss slider 




export default function SliderSection({children , countSlide}:sliderSection) {

       console.log(children)

       return (
              <Swiper className={` | mySwiper !h-full`} 
                     dir='ltr'
                     modules={[Autoplay]} 
                     breakpoints= {{
                            0: { slidesPerView: countSlide.sm },
                            700: { slidesPerView: countSlide.md || countSlide.sm },
                            1000: { slidesPerView: countSlide.lg || countSlide.md || countSlide.sm}}} 
                     autoplay={{delay: 3000, disableOnInteraction: false}}
              >
                     {children.map((section, index) => {
                     if(section.props){
                            return (
                                   <SwiperSlide key={index} className="px-3 -z-10 relative h-full">
                                          <>{section.props.children}</>
                                   </SwiperSlide>
                            )
                     }
                     })} 
              </Swiper>
       );
}

