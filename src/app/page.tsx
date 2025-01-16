import Image from "next/image"
import SliderPhotos from "./components//SliderPhotos/SliderPhotos"
import offers4G from '../../public/images/offer 4G.webp'
import stylesHome from './Page.module.scss'

import slideHero1 from '../../public/images/FreeMax-Ruby-Portal-825x340-Shopping.webp'
import slideHero2 from '../../public/images/elkebeer.webp'
import slideHero3 from '../../public/images/Orange Portal.webp'
import slideHero4 from '../../public/images/afreh kedh kedh.webp'
import slideHero5 from '../../public/images/slider5.png'
import offers1 from '../../public/images/offers 1.png'
import offers2 from '../../public/images/offers 2.png'
import offers3 from '../../public/images/offers 3.png'
import offers4 from '../../public/images/offers 4.jpg'
import SectionServices from "./components/SectionServices/SectionServices";
import services from '../../public/images/services internet .png'
import services2 from '../../public/images/services 2.png'
import SliderSection from "./components/SliderSection/SliderSection";
import planer from '../../public/images/planer.png' 

export default function Home() {
       return (
              <>
                     <section id="hero">
                     <SliderPhotos countSlide={{sm:1}}>
                            <Image src={slideHero1} alt="ads" />
                            <Image src={slideHero2} alt="ads" />
                            <Image src={slideHero3} alt="ads" />
                            <Image src={slideHero4} alt="ads" />
                            <Image src={slideHero5} alt="ads" />
                     </SliderPhotos>
                     </section>

                     <section id="offer-package-4G" className={`${stylesHome.offers_4G} | 
                     flex flex-col lg:flex-row items-center justify-center lg:justify-between w-3/4 m-auto relative z-10 rounded-lg`}>
                            <Image className="pe-8" src={offers4G} alt="offer package 4G" loading="lazy" />
                            <div className={`${stylesHome.rightSide} hidden md:block`} dir="rtl">
                                   <h2 className="font-bold">مع خدمات 4G </h2>
                                   <p>مع خدمات الـ 4G، الإنترنت بقى أسرع وأقرب ليك من أي وقت مضى:</p>
                                   <ul>
                                          <li>سرعة استجابة فورية: شغل الفيديوهات بجودة عالية من غير أي تقطيع!</li>
                                          <li>تحميل وتنزيل أسرع: سواء أفلام، ملفات، أو صور – كله في ثواني.</li>
                                          <li>ألعاب أونلاين من غير لاج: العب واستمتع بأداء مميز على مدار السـاعة.</li>
                                          <li>اتصال قوي ومستقر: كُن متصل دائماً من أي مكان، سواء في البيت أو خارجه.</li>
                                   </ul>

                            </div>
                     </section>
                     
                     <section id="slider-offers" className="">
                     <SliderPhotos countSlide={{sm:1,md:2,lg:3}}>
                            <Image className="!h-1/2" src={offers1} alt="offers" />
                            <Image className="!h-1/2" src={offers2} alt="offers" />
                            <Image className="!h-1/2" src={offers3} alt="offers" />
                            <Image className="!h-1/2" src={offers4} alt="offers" />
                     </SliderPhotos>
                     </section>

                     

                     <section>
                     <SliderSection countSlide={{sm:1, md:2, lg:2}}>
                            <SectionServices title="Hello" para="das">
                                   <Image className="!h-1/2" src={services} alt="offers" />
                            </SectionServices>

                            <SectionServices title="Hello" para="das">
                                   <Image className="!h-1/2" src={services2} alt="offers" />
                            </SectionServices>
                     </SliderSection>
                     </section>

                     <section id="planer" className="h-[298px] px-3 my-20">
                            <Image className="!h-full !w-full object-cover rounded-lg object-right" src={planer} alt="planer" />
                     </section>

                     <section>
                     <SliderSection countSlide={{sm:1, md:2, lg:2}}>
                            <SectionServices title="Hello" para="das">
                                   <Image className="!h-1/2" src={services} alt="offers" />
                            </SectionServices>

                            <SectionServices title="Hello" para="das">
                                   <Image className="!h-1/2" src={services2} alt="offers" />
                            </SectionServices>
                     </SliderSection>
                     </section>

                     
              </>
       );
}
