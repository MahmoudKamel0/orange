import Link from 'next/link'
import React from 'react'
import './Footer.scss'
import OrangeFooter from '../../../../public/icons/OrangeFooter'
import Image from 'next/image'
import logoOrange from '../../../../public/icons/logo.svg'
import Instagram from '../../../../public/icons/Instagram'
import Facebook from '../../../../public/icons/Facebook'
import Twitter from '../../../../public/icons/Twitter'


export default function Footer() {
       return (
              <footer className='mt-10 lg:mt-0 px-5 lg:px-16'>
              <div className="partTop | flex flex-col lg:flex-row items-start justify-between py-16 gap-7">
                     <div className="items-links | flex flex-col lg:flex-row flex-auto gap-20 lg:pr-10 w-full" dir='rtl'>
                     <div className="item">
                            <h3>المنصة</h3>
                            <ul>
                                   <li><Link href="/">الخطط والتسعير</Link></li>
                                   <li><Link href="/">مدير الذكاء الاصطناعي الشخصي</Link></li>
                                   <li><Link href="/">كاتب الأعمال بالذكاء الاصطناعي</Link></li>
                                   <li><Link href="/">معالجة البيانات بالذكاء الاصطناعي</Link></li>
                            </ul>
                     </div>

                     <div className="item">
                            <h3>الشركة</h3>
                            <ul>
                                   <li><Link href="/">من نحن</Link></li>
                                   <li><Link href="/">العمل معنا</Link></li>
                                   <li><Link href="/">المدونة والأخبار</Link></li>
                            </ul>
                     </div>

                     <div className="item">
                            <h3>الموارد</h3>
                            <ul>
                                   <li><Link href="/">التوثيق</Link></li>
                                   <li><Link href="/">عرض تجريبي مجاني</Link></li>
                                   <li><Link href="/">المؤتمرات الصحفية</Link></li>
                            </ul>
                     </div>
                     
                     <div className="item">
                            <h3>الشؤون القانونية</h3>
                            <ul>
                                   <li><Link href="/">شروط الخدمة</Link></li>
                                   <li><Link href="/">سياسة الخصوصية</Link></li>
                                   <li><Link href="/">سياسة الخصوصية</Link></li>
                                   <li><Link href="/">معالجة البيانات</Link></li>
                            </ul>
                     </div>
                     </div>

                     <div className="box | w-auto lg:w-[380px] text-right">
                            <div className="header flex items-center justify-between gap-3">
                                   <OrangeFooter size={80} />
                                   <h3>حمل الان تطبيق ماي اورنج و استمتع باقوي الاروض الان</h3>
                            </div>
                            <p>اكتشف تجربة جديدة مع تطبيق My Orange – عروض مميزة وخدمات سهلة في متناول يدك!</p>
                     </div>
              </div>

              <div className="partBottom | flex items-center justify-between mt-10 py-10">
                     <Link className={`logo | flex items-center justify-center gap-4`} href='/'>
                            <Image src={logoOrange} alt='logo' width={50} height={100} loading='lazy' />
                            <span className="egy | text-nowrap"><strong className="strong">Orange</strong> | egy</span>
                     </Link>

                     <div className="social | inline-flex gap-3 md:gap-7">
                            <a href="https://www.instagram.com/Orange_Egypt" target='_blank'><Instagram size={35} /></a>
                            <a href="https://www.facebook.com/OrangeEgyptOfficial" target='_blank'><Facebook size={35} /></a>
                            <a href="https://x.com/Orange_Egypt" target='_blank'><Twitter size={35} /></a>
                     </div>
              </div>
              </footer>
       )
}
