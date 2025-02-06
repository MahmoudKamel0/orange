import React from 'react'

export default function Facebook({size}:{size?:number}) {
       return (
              <svg width={size} height={size} viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <rect y="0.5" width={40} height={40} rx={20} fill="#040505" />
                     <rect x="0.5" y={1} width={39} height={39} rx="19.5" stroke="#040505" strokeOpacity="0.24" />
                     <path d="M28.3333 23.9917C28.3333 27.0251 26.525 28.8334 23.4917 28.8334H22.5C22.0417 28.8334 21.6667 28.4584 21.6667 28.0001V23.1918C21.6667 22.9668 21.85 22.7751 22.075 22.7751L23.5417 22.7501C23.6583 22.7418 23.7583 22.6584 23.7833 22.5418L24.075 20.9501C24.1 20.8001 23.9833 20.6584 23.825 20.6584L22.05 20.6834C21.8166 20.6834 21.6333 20.5001 21.625 20.2751L21.5917 18.2334C21.5917 18.1001 21.7 17.9834 21.8416 17.9834L23.8416 17.9501C23.9833 17.9501 24.0917 17.8418 24.0917 17.7001L24.0583 15.7001C24.0583 15.5584 23.95 15.4501 23.8083 15.4501L21.5583 15.4834C20.175 15.5084 19.075 16.6417 19.1 18.0251L19.1417 20.3167C19.15 20.5501 18.9667 20.7334 18.7333 20.7418L17.7333 20.7584C17.5917 20.7584 17.4833 20.8667 17.4833 21.0084L17.5083 22.5918C17.5083 22.7334 17.6167 22.8417 17.7583 22.8417L18.7583 22.8251C18.9917 22.8251 19.175 23.0084 19.1833 23.2334L19.2583 27.9834C19.2666 28.4501 18.8916 28.8334 18.425 28.8334H16.5083C13.475 28.8334 11.6667 27.0251 11.6667 23.9834V17.0084C11.6667 13.9751 13.475 12.1667 16.5083 12.1667H23.4917C26.525 12.1667 28.3333 13.9751 28.3333 17.0084V23.9917Z" fill="white" />
              </svg>
       )
}

