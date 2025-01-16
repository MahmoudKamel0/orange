import { sectionServicesItem } from '@/app/types/types'
import Image from 'next/image'
import React from 'react'

export default function SectionServices({children,title,para}:sectionServicesItem) {
       return (
              <section>
                     <Image className={`${children.props.className} | w-full h-full object-cover rounded-lg`} 
                            src={children.props.src.src} 
                            alt={children.props.alt} 
                            loading="lazy" 
                            width={children.props.src.width} 
                            height={children.props.src.height} 
                     />

                     <div className="details">
                            <h2>{title}</h2>
                            <p>{para}</p>
                     </div>
              </section>
       )
}
