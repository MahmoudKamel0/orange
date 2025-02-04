"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, {useState } from 'react'

// import React icons
import { RiMenu4Fill } from "react-icons/ri";

// import assets website 
import logoOrange from '../../../../public/icons/logo.svg'
import OrangeStore from '../../../../public/icons/OrangeStore'
import ChatUs from '../../../../public/icons/ChatUs'
import Location from '../../../../public/icons/Location'
import User from '../../../../public/icons/User'
import Dropdown from '../../../../public/icons/Dropdown'
// import style sheet scss
import stylesNavigation from './Navigationbar.module.scss'

export default function NavigationBar() {

       const [isToggleMenu, setIsToggleMenu] = useState(false)
       const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });

       const navLinks = {
              navigation: [
                     {label: "الرئيسية", path: "/" },
                     {label: "الخدمات", icon: <Dropdown /> , path: "/" },
                     {label: "تسوق", path: "/" },
                     {label: "عروض", path: "/" },
                     {label: "المساعدة", path: "/" },
              ],

              linksAboutOrange: [
                     {label: "Orange store", 
                            path: "/" , 
                            icon: <OrangeStore size={30} />
                     },

                     {label: "Chat us", 
                            path: "/" , icon: 
                            <ChatUs size={30} />},

                     {label: "Location", 
                            path: "/" , icon: 
                            <Location size={30} />
                     },
              ]

       };

       const handleIndicator = (el:HTMLElement) => {
              const { offsetWidth, offsetLeft } = el;
              setIndicatorStyle({ width: offsetWidth, left: offsetLeft });
       };

       return (
              <nav className={`${stylesNavigation.navigation} | px-3 flex items-center justify-between p-3 relative`} dir='ltr'>
              <div className={`${stylesNavigation.leftSide} | flex items-center justify-center`}>
                     {/* logo orange */}
                     <Link className={`${stylesNavigation.logo} | flex items-center justify-center gap-4`} href='/'>
                            <Image src={logoOrange} alt='logo' width={50} height={100} loading='lazy' />
                            <span className={`${stylesNavigation.egy} text-nowrap`}><strong className={stylesNavigation.strong}>Orange</strong> | egy</span>
                     </Link>

                     {/* important links */}
                     <div className="important-links | hidden lg:flex items-center justify-center ms-7 gap-6">
                            { navLinks.linksAboutOrange.map((link,index) => (
                                   <Link key={index} className={`${stylesNavigation.icon} | gap-3`} href={link.path}>
                                          {link.icon}
                                          <span>{link.label}</span>
                                   </Link>
                            )) }
                     </div>
              </div>


              <div className={`${stylesNavigation.rightSide} | flex flex-col lg:static lg:flex-row lg:w-fit lg:flex items-center justify-between`}>
                     {/* navigation menu */}
                     <menu className={`${isToggleMenu ? 'flex' : 'hidden'} absolute lg:relative top-16 left-0 lg:top-0 lg:right-0 w-full bg-white border-t-2 lg:border-t-0 lg:w-fit z-10 lg:flex flex-col lg:flex-row gap-5 py-10 lg:py-0 items-center justify-center lg:gap-7 ms-7`} style={{direction: 'rtl'}}>
                            {navLinks.navigation.map((link,index) => (
                                   <li key={index}>
                                          <Link className={`${stylesNavigation.link} | flex items-center justify-center`} 
                                          href={link.path} onMouseMove={(e) => handleIndicator(e.currentTarget)}>
                                                 {link.label} <span className='ms-1 mt-1'>{link?.icon}</span>
                                          </Link>
                                   </li>
                            )) }

                            <div className={`${stylesNavigation.lineHover} hidden lg:block`} style={{
                                   width: `${indicatorStyle.width}px`,
                                   left: `${indicatorStyle.left}px`,
                            }}></div>
                     </menu>

                     {/* buttons */}
                     <div className="flex gap-4">
                            <button className={`${stylesNavigation.login} | text-nowrap flex items-center justify-center gap-3`}>
                                   <span className={`${stylesNavigation.span}`}>تسجيل الدخول</span>
                                   <User size={20} />
                            </button>

                            <button onClick={()=> setIsToggleMenu(!isToggleMenu)} className='btn-menu | block lg:hidden'><RiMenu4Fill size={30} /></button>
                     </div>

              </div>
              
              </nav>
       )
}
