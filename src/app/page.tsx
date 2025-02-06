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
import Link from "next/link"
import phone from '../../public/images/phone.png'
import photo1 from '../../public/images/scetion 2.png'
import photo2 from '../../public/images/Orange Tariffs .png'

export default function Home() {
       return (
              <>
                     {/* slider hero display important ads and offers */}
                     <section id="hero" className="h-screen">
                     <SliderPhotos countSlide={{sm:1}}>
                            <Image src={slideHero1} alt="ads" />
                            <Image src={slideHero2} alt="ads" />
                            <Image src={slideHero3} alt="ads" />
                            <Image src={slideHero4} alt="ads" />
                            <Image src={slideHero5} alt="ads" />
                     </SliderPhotos>
                     </section>


                     {/* display package 4G of orange */}
                     <section id="offer-package-4G" className={`${stylesHome.offers_4G} | flex flex-col gap-4 lg:flex-row items-center justify-center lg:justify-between w-3/4 m-auto relative z-10 rounded-lg`}>
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

                            <Image className="pe-8" src={offers4G} alt="offer package 4G" loading="lazy" />
                     </section>
                     

                     {/* slider display latest offers */}
                     <section id="slider-offers" className="h-[270px]">
                     <SliderPhotos countSlide={{sm:1,md:2,lg:3}}>
                            <Image src={offers1} alt="offers" />
                            <Image src={offers2} alt="offers" />
                            <Image src={offers3} alt="offers" />
                            <Image src={offers4} alt="offers" />
                     </SliderPhotos>
                     </section>

                     

                     <section id="slider-offers" className="mt-20"> 
                     <div className={`${stylesHome.title} | px-3 w-full`}>
                            <div className="px-3 flex items-center justify-between">
                                   <h2 className="lg:w-[450px]">تمتع بأسرع تجربة إنترنت مع أقوى شبكة في مصر  تدعم احتياجاتك اليومية، سواء للعمل أو الترفيه!</h2>
                                   <Link className="ms-7 text-nowrap" href='/'>عرض المزيد</Link>
                            </div>
                     </div>

                     <SliderSection countSlide={{sm:1, md:2, lg:2}}>
                            <SectionServices 
                                   title="الانترنت المنزلي" 
                                   para="اشترك الان في Home Dsl  واستمتع بسرعات تصل الي 200 ميجا و سعات تحميل تصل الي 1000 جيجا."
                            >
                                   <Image src={services} alt="offers" />
                            </SectionServices>

                            <SectionServices 
                                   title="موبايل إنترنت" 
                                   para="باقات الإنترنت GO باسعار مختلفة، هتناسب استخدامك علي كل المواقع لو علي السوشيال ،فيديو او المزيكا . الباقات تبدأ من 7 جنية، و تصل لـ49,000ميجا. وكمان هتجيلك احسن عروض للانترنت من تطبيق My Orange"
                            >
                                   <Image src={services2} alt="offers" />
                            </SectionServices>
                     </SliderSection>
                     </section>


                     <section id="planer" className="h-[298px] px-3 my-20">
                            <Image className="!h-full !w-full object-cover rounded-lg object-right" src={planer} alt="planer" />
                     </section>


                     <section>
                     <div className={`${stylesHome.title} | px-3 w-full`}>
                            <div className="px-3 flex items-center justify-between">
                                   <h2 className="lg:w-[450px]">تمتع بأسرع تجربة إنترنت مع أقوى شبكة في مصر  تدعم احتياجاتك اليومية، سواء للعمل أو الترفيه!</h2>
                                   <Link className="ms-7 text-nowrap" href='/'>عرض المزيد</Link>
                            </div>
                     </div>
                     <SliderSection countSlide={{sm:1, md:2, lg:2}}>
                            <SectionServices 
                                   title="فري ماكس" 
                                   para="اشترك الان في Home Dsl  واستمتع بسرعات تصل الي 200 ميجا و سعات تحميل تصل الي 1000 جيجا."
                            >
                                   <Image src={photo1} alt="offers" />
                            </SectionServices>

                            <SectionServices 
                                   title="نظام الوو" 
                                   para="باقات الإنترنت GO باسعار مختلفة، هتناسب استخدامك علي كل المواقع لو علي السوشيال ،فيديو او المزيكا . الباقات تبدأ من 7 جنية، و تصل لـ49,000ميجا. وكمان هتجيلك احسن عروض للانترنت من تطبيق My Orange"
                            >
                                   <Image src={photo2} alt="offers" loading="lazy" />
                            </SectionServices>
                     </SliderSection>
                     </section>

                     
                     <section id='my-orange' className={`${stylesHome.myOrange} | px-3 min-h-[90vh] flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between`}>
                            <div className="txt | lg:w-1/2">
                                   <h2>حمّل تطبيق My Orange واستمتع بالتحكم الكامل في خطك!</h2>
                                   <p>مع تطبيق My Orange مصر، استكشف عالمًا من الراحة والتحكم! تابع استهلاكك، اشحن رصيدك، جدد باقتك، واطلع على أحدث العروض بضغطة واحدة. كل ما تحتاجه لإدارة خطك بسهولة في مكان واحد. حمّل التطبيق الآن واستمتع بتجربة غير مسبوقة!</p>
                                   <div className="downloadLinks">
                                          <Link href=''></Link>
                                          <Link href=''></Link>
                                          <Link href=''></Link>
                                   </div>
                            </div>
                            <Image src={phone} alt='' />
                     </section>
                     
              </>
       );
}
