import Image from "next/image";
import Slider from "./components/Slider/Slider";
import offers4G from '../../public/images/offer 4G.webp'
import stylesHome from './Page.module.scss'

export default function Home() {
       return (
              <>
                     <Slider>
                            {/* {imagesSliderOffers} */}
                     </Slider>
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
              </>
       );
}
