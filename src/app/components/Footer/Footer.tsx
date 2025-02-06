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
              <footer className='px-5 lg:px-16'>
              <div className="partTop | flex flex-col lg:flex-row items-start justify-between py-16 gap-7">
                     <div className="items-links | flex flex-wrap flex-auto gap-20">
                     <div className="item">
                            <h3>Platform</h3>
                            <ul>
                                   <li><Link href="/">Plans & Pricing</Link></li>
                                   <li><Link href="/">Personal AI Manager</Link></li>
                                   <li><Link href="/">AI Business Writer</Link></li>
                                   <li><Link href="/">AI Data Processing</Link></li>
                            </ul>
                     </div>

                     <div className="item">
                            <h3>Company</h3>
                            <ul>
                                   <li><Link href="/">About Us</Link></li>
                                   <li><Link href="/">Work With Us</Link></li>
                                   <li><Link href="/">Blog & News</Link></li>
                            </ul>
                     </div>

                     <div className="item">
                            <h3>Resources</h3>
                            <ul>
                                   <li><Link href="/">Documentation</Link></li>
                                   <li><Link href="/">Free Demo</Link></li>
                                   <li><Link href="/">Press Conferences</Link></li>
                            </ul>
                     </div>
                     
                     <div className="item">
                            <h3>Legal</h3>
                            <ul>
                                   <li><Link href="/">Terms of Service</Link></li>
                                   <li><Link href="/">Privacy Policy</Link></li>
                                   <li><Link href="/">Cookies Policy</Link></li>
                                   <li><Link href="/">Data Processing</Link></li>
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
                            <Link href="/"><Instagram size={35} /></Link>
                            <Link href="/"><Facebook size={35} /></Link>
                            <Link href="/"><Twitter size={35} /></Link>
                     </div>
              </div>
              </footer>
       )
}
